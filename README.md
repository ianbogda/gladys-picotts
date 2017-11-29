# Gladys Pioc Text to Speech
Require Gladys >= 3.1.11

This module use pico2wave to say a given text.

## Installation
To install this module, you need to :

- Install the module in Gladys
- Reboot Gladys
- Configure your notification settings in the "notification" panels in parameters

## Warning
- This module need libttspico-utils

```bash
sudo apt-get install libttspico-utils
```

- Gladys will speak to you only if you are at home ! (If you are not at home, it's useless to speak in an empty room).

To detect if you are at home, Gladys uses events.

First, to know in which home your Raspberry Pi (the machine running Gladys) is located, Gladys uses "machines" (you can configure it in parameters).
Especially the "me" field. She takes the machine where "me" is true.

Then, she looks at events "back-at-home" and "left-home".

If last event for this particular house and with your user ID is "back-at-home", it means you are at home.

If not, it means your are in another place.

## Language supported

  - english en-US
  - english en-GB
  - Français fr-FR
  - Espagnol es-ES
  - Deutch de-DE
  - Italian it-IT

## Scripts
You can say a given text from a script

```
gladys.modules.picotts.say({text:"MyText", language:"fr-FR"})
```
