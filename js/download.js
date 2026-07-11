// Latest-release resolution: the download buttons always serve the newest
// signed build from GitHub Releases — the site never hosts binaries and
// never needs a manual update per release.
//
// No releases yet (pre-1st-release) degrades gracefully: buttons link to the
// releases page and the version line says "coming soon".

const REPO = "eeeurico/talea";
const RELEASES_PAGE = `https://github.com/${REPO}/releases`;

async function resolveLatest() {
  const macBtn = document.getElementById("mac-download");
  const macVersion = document.getElementById("mac-version");
  const heroVersion = document.getElementById("hero-version");
  const heroBtn = document.getElementById("hero-download");

  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error(`no release (${res.status})`);
    const release = await res.json();

    const dmg = (release.assets || []).find((a) => a.name.endsWith(".dmg"));
    if (macVersion) {
      macVersion.textContent = dmg
        ? `${release.tag_name} · ${(dmg.size / (1024 * 1024)).toFixed(0)} MB · signed & notarized`
        : `${release.tag_name} · see all assets`;
    }
    if (heroVersion) {
      heroVersion.textContent = `${release.tag_name} · GPL-2.0 · macOS (Apple silicon)`;
    }
    if (dmg) {
      if (macBtn) macBtn.href = dmg.browser_download_url;
      if (heroBtn) heroBtn.href = dmg.browser_download_url;
    } else {
      if (macBtn) macBtn.href = release.html_url;
    }
  } catch {
    if (macVersion) macVersion.textContent = "first release coming soon";
    if (macBtn) macBtn.href = RELEASES_PAGE;
  }
}

resolveLatest();
