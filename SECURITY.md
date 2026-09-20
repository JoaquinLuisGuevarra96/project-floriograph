# Security Policy

## Supported versions

Security fixes are applied to the latest release and to the `main` branch.
Older versions are not supported unless explicitly listed below.

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |
| < latest| :x:                |

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues,
discussions, or pull requests.**

Report privately using either channel below:

1. **GitHub private advisory** (preferred) —
   [open a draft security advisory](https://github.com/JoaquinLuisGuevarra96/project-floriograph/security/advisories/new)
   on this repository.
2. **Email** — `joaquinluis.guevarra.96@gmail.com`

### What to include

- A description of the vulnerability and its impact
- Steps to reproduce, or a proof-of-concept
- Affected version(s) and configuration
- Any known mitigations or workarounds
- Whether you intend to publish your findings, and on what timeline

### What to expect

| Stage                          | Target timeframe      |
| ------------------------------ | --------------------- |
| Acknowledgement of report      | within 3 business days|
| Initial assessment / triage    | within 7 business days|
| Status update cadence          | every 7 days          |
| Fix or mitigation for critical | within 30 days        |

We will keep you informed throughout, and we will credit you in the advisory
and release notes unless you ask us not to.

## Disclosure policy

We follow coordinated disclosure:

1. You report the issue privately.
2. We confirm and assess the report.
3. We develop and test a fix.
4. We publish a patched release and a GitHub security advisory.
5. You may publish your own write-up after the advisory is public.

We ask that you give us a reasonable window — 90 days is our default — before
any public disclosure. If we are unresponsive or the timeline slips, tell us;
we would rather negotiate than have you sit on a real finding.

## Scope

In scope:

- The code and configuration in this repository
- Published packages, container images, and release artifacts produced from it

Out of scope:

- Vulnerabilities in third-party dependencies — report those upstream (though
  a heads-up is welcome, and Dependabot is already watching)
- Issues requiring a compromised local environment or physical access
- Missing hardening headers or best-practice suggestions with no demonstrated
  impact
- Social engineering, spam, or denial-of-service via volumetric attacks
- Automated scanner output with no reproducible impact

## Safe harbour

We will not pursue or support legal action against researchers who:

- Make a good-faith effort to comply with this policy
- Report promptly and do not exploit the issue beyond what is needed to
  demonstrate it
- Do not access, modify, or exfiltrate data belonging to others
- Do not degrade the service for other users

If in doubt about whether your research is covered, contact us first.

## Recognition

With your permission, we will thank you by name or handle in the published
advisory and in the release notes for the fix.