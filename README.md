# learn-web-playground-2026-27

Explore web publishing by working on your own version of the in-class doing project: a refactoring of the well-known [cdl.unimi.it/spes/com](https://cdl.unimi.it/spes/com)

[![](./imgs/com-landing.png)](https://cdl.unimi.it/spes/com)

Please see folder [learn-web\42-frames](https://github.com/ale66/learn-web/learn-web\42-frames) for details.

---

## How to participate to the in-class lab

## Week 5

Mid-October you should, ideally, be level with the following milestone:

a version of the `30-visuals/exercise-a` folder with

- an own hero page for COM;
- own styles in `mystyle.css` and/or `fonts-style.css`;
- owm images in `./imgs/`;
- links on the page, images embedded;
- YT and GM embeds, e.g., a video about COM and a Google Maps, and
- possibly, own video (upload to new folder `./videos/` or `./av/`).

---

## Week 6

In late October you should, ideally, have completed the following milestone

- be able to pair-code using the VS Code live server extension

- have a GH *student* account

- (via instructor's own folder) on `ale66.github.io/learn-web-playground-2026-27/essays/name.surname/`

- have copy+pasted your own files there

- made floating menu with useful links

- boxed up some official text from `https://com.cdl.unimi.it/en` and made it float in your project page

- make a menu of navigation links and float it (details in past presentations)

---

## Student essays online {.smaller}

```{=html}
<ul id="essays" class="essays-grid"><li>Loading…</li></ul>

<style>
  .essays-grid { column-count: 3; column-gap: 1.5em; list-style: none; padding: 0; margin: 0; }
  .essays-grid li { break-inside: avoid; margin: .2em 0; }
</style>

<script>
(async () => {
  const OWNER = 'ale66', REPO = 'learn-web-playground-2026-27';
  const ul = document.getElementById('essays');

  async function folderNames() {
    // 1) static list produced by a GitHub Action (no rate limit)
    try {
      const r = await fetch('essays/index.json', { cache: 'no-cache' });
      if (r.ok) return await r.json();
    } catch (e) {}
    // 2) fallback: GitHub contents API (60 requests/hour per IP)
    const r = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/contents/essays`);
    if (!r.ok) throw new Error('GitHub API ' + r.status);
    return (await r.json()).filter(f => f.type === 'dir').map(f => f.name);
  }

  try {
    const names = (await folderNames())
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    // keep only folders that really contain an index.html
    const ok = await Promise.all(names.map(async n => {
      try {
        const r = await fetch(`essays/${encodeURIComponent(n)}/index.html`, { method: 'HEAD' });
        return r.ok;
      } catch (e) { return false; }
    }));

    ul.innerHTML = '';
    names.filter((_, i) => ok[i]).forEach(n => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `essays/${encodeURIComponent(n)}/`;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = n;
      li.appendChild(a);
      ul.appendChild(li);
    });
    if (!ul.children.length) ul.innerHTML = '<li>No essays yet.</li>';
  } catch (err) {
    ul.innerHTML = '<li>Could not load the list of essays.</li>';
    console.error(err);
  }
})();
</script>
```
