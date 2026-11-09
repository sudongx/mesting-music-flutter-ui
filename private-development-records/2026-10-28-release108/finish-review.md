# Host candidate review

- Actual helper/reference pixel comparison, strict peer pass/transform/overlap policies, retained-state invalidation, raw-vsync capture interval and bounded drain were reviewed.
- Material/motion/player call sites are identical to frozen 1.0.7; indicator isolation remains.
- 26 first-batch and 41 final-batch checks pass (overlap), static analysis is clean.
- Eight diagnostic captures cover light/dark, 320dp at 1.6x text, 390dp and 768dp; QA font loading corrected, no overflow found.
- APK identity, original signing, 16KiB alignment, release-only assets and four matching Chinese notes pass.
- This is a host candidate review, not a GPU/device performance acceptance.
- Shader branch/register costs and strict sharing benefit on Xiaomi 14 Pro require the user repeat the same test. Light shadow overlap intentionally disables sharing.

No phone or account access. No persistent 120fps claim.
