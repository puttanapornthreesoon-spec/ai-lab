import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function loadWorker() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

async function render(worker, path = "/") {
  const response = await worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
  return response;
}

test("renders development preview metadata", async () => {
  const worker = await loadWorker();
  const response = await render(worker);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "DENY");
  assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
  const html = await response.text();
  assert.match(html, developmentPreviewMeta);
  assert.match(html, /Digital GiGz AI Lab/i);
});

test("renders every primary product route", async () => {
  const worker = await loadWorker();
  const routes = [
    ["/about", /Healthcare expertise/i],
    ["/tools", /Purpose-built starting points/i],
    ["/prompts", /Better prompts/i],
    ["/research", /Move from question to evidence/i],
    ["/learn", /Learn AI at a pace/i],
    ["/blog", /Practical notes on AI/i],
    ["/blog/human-judgment-is-the-feature", /Human judgment is the feature/i],
    ["/dashboard", /What would you like to move forward/i],
    ["/contact", /responsible AI capability together/i],
    ["/privacy", /Privacy, in plain language/i],
    ["/terms", /Use the Lab as a learning resource/i],
  ];

  for (const [path, expected] of routes) {
    const response = await render(worker, path);
    assert.equal(response.status, 200, `${path} should render`);
    assert.match(await response.text(), expected);
  }
});
