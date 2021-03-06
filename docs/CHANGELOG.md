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
This update adds in Milestones, Cases and the Stats Page, and a couple more settings.

### 1.2.8 [UNRELEASED]
#### Additions
- Daily Events
  - Monday: Double Material Per Click
  - Tuesday: Increased Golden Click Chance
  <!-- - Wednesday: Wednesday Case Prize -->
  - Wednesday: Coming Soon
  - Thursday: Coming Soon
  - Friday: Upgrades 15% Off
  - Saturday: Coming Soon
- Case Page
  - You can now view all your cases in the Case page.
  - You are able to open cases by clicking on them and viewing a short animation.
    <!-- - You can toggle off the animation in settings. -->
- More Cases
  - 50/50 Case
    - 50/50 chance of doubling or taking half you clicks.
  - Russian Roulette Case
    - Small chance of doubling you clicks. If you lose, it takes half.
  - True Russian Roulette Case
    - Small chance of multiplying your current Material count by five, if you lose, it takes all you Material.
  - The Case Case™
    - Gives you one of the many cases we have.

#### Changes
- Notification Popup has a slightly different behavior when clicked.

#### Possible Future Changes
- Adjustment of the weights for the Russian Roulette class cases.

### 1.2.6 + 1.2.7
These versions were tracked incorrectly, so they are grouped together
#### Addtions
- Notification sound for milestones.
- A playSound fallback, incase the requested sound doesn't exist.
- Case Logic, and Case Page, except you cannot open the cases just yet.
- Material Case

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

### 1.2.2 - 1.2.4
#### Fixes
- Fixed save loading.

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
