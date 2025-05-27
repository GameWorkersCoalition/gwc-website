// set language when selector changes
document.getElementById("lang-select").addEventListener("change", (n) => {
  window.location.href = n.target.value;
});

// populate member list
(async () => {
  const res = await fetch("/data.json");
  const data = await res.json();

  const lang = document.documentElement.lang;

  const orgsHtml = [];
  for (const [region, members] of Object.entries(data.members)) {
    const localizedRegion = data.strings[region][lang] || region;

    const regionMembers = members.map(
      (m) =>
        `
        <li>
          <a href="${m.link}">${m.name}</a>
          <span class="member-location">${m.location ?? ""}</span>
        </li>
        `
    );

    orgsHtml.push(`
      <h3 class="region">${localizedRegion}</h3>
      <ul class="members-list">${regionMembers.join("\n")}</ul>
    `);
  }

  const el = document.getElementById("orgs-list");
  el.innerHTML = orgsHtml.join("\n");
})();
