# Changelog
Changes made are logged here. The version increases are based on SemVer, but
follow these exact rules:
  - Major increases when something changes that is not backwards compatible at
    all.
  - Minor increases with new features that may not be compatible when loading in
    older versions
  - Patch increases when any non breaking change is added such as bug fixing.

---

## 1.2.x
### 1.2.6 Unreleased
#### Addtions
- Notification sound for milestones.
- A playSound fallback, incase the requested sound doesn't exist.
<!-- - Case "API".
- Material Case to give you Material. -->

#### Changes
- Changed Golden Click sound to be less annoying.
- Refactored sound names.

#### Fixes
- Fixed milestone page not loading.
- Fixed beta option being checked by default
- Fixed MacOS Crashing and Title bar

### 1.2.5
#### Fixes
- Fixed milestones page.
- Milestone notification.
- Reduce floating number option.

### 1.2.4
#### Fixes
- Fixed save loading.

### 1.2.3
#### Fixes
- Fixed stat loading.

### 1.2.2
### Fixes
- Fixed Save loading.

### 1.2.1
### Additions
- Weighted Random.
- Badges on tabs to signify available upgrades to buy.
- Milestones base.

### 1.2.0
### Additions
- New save format.

## 1.1.x
### 1.1.1
#### Changes
- Updated Electron

### 1.1.0
#### Additions
- Material Factory upgrade.
- Material Gained and Lost Indicators
  - When you click the button, the Material gained shows where your cursor is.
  - When you buy a shop item, -xx,xxx appears where your cursor is, indicating how much you spent.
  - All auto generated Material shows at the bottom of the screen. This is on all tabs, and the numbers appear behind the shop foreground.
- New sounds!
  - Shop buy sound plays when you buy a shop item.
  - Golden click sound!
- Color parameter on Floating Numbers.

#### Fixes
- Fixed `Shift + Tab` not working to switch tabs.

#### Changes
- Refactored the Click Miner and Click Portal upgrades to use Material Miner and Material Portal.
- The floating number when you buy something is red.

---

## Release 1.0.x
Initial Release, contains the core systems and pages of the game, as well as some
starting upgrades and a few keyboard shortcuts.

### 1.0.3 (2019-02-16)
#### Changes
- Modify how auto updater works, and fix most of it's problems.

### 1.0.2 (2019-02-16)
#### Additions
- Initial Public Release.

## Fixes
- Fixed the shop not actually working.

### 1.0.0 (2019-02-15)
#### Additions
- Initial Release
