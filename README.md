# PaoTato House · GitHub Pages website

This ZIP contains a complete static website, intended for GitHub Pages hosting at **https://paotatohouse.com/**. The QR on the packaging encodes this domain. Canva is not involved.

## Publish on GitHub
1. Sign in to GitHub. Create a **public** repository, such as `paotatohouse-site`.
2. Upload **all the extracted contents of this folder into the repository root**. Do not upload the ZIP itself. Commit them to the `main` branch.
3. In the repository, select **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**.
4. Under **Pages → Custom domain**, enter `paotatohouse.com` and save. This repository includes a matching `CNAME` file.
5. In Cloudflare DNS for `paotatohouse.com`, remove any conflicting apex `A`, `AAAA`, or `CNAME` records. Create these four DNS-only apex `A` records (name `@`):
    - `185.199.108.153`
    - `185.199.109.153`
    - `185.199.110.153`
    - `185.199.111.153`
6. Optional but recommended: Add `www` CNAME pointing to `<YOUR-GITHUB-USERNAME>.github.io` (replace placeholder with actual user or organization owning the repository). Configure `www` only after you know your GitHub account name.
7. Wait for GitHub Pages to issue an HTTPS certificate; then enable **Enforce HTTPS** in Pages settings. Test both `https://paotatohouse.com/` and a printed QR scan before distribution.

**Do not overwrite unrelated DNS records, including mail `MX`, `TXT`, or DKIM records.** If the domain serves an existing website, coordinate cutover first.

## Website content
This static site has no order-processing backend and does not store visitor data. Customers contact the team using the provided Facebook, TikTok, or telephone details. Launch timing and product details are identified as planned/prototype where appropriate.

## Packaging QR and print
The accompanying updated packaging images and PDF use the exact same URL in the QR. Batch dates in the prototype artwork are illustrative. Verify finished net weight and real lot/expiry information for consumer packaging before selling.
