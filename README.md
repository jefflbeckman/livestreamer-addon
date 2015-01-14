# livestreamer-addon
firefox addon to watch twitch or other things in VLC

requires:
linux
  tested on xubuntu 12.0.4
firefox

installation instructions:
#install pip, the python package manager
sudo apt-get install pip

#install livestreamer program
sudo pip install livestreamer

#should be /usr/local/bin/livestreamer
which livestreamer

#install the addon
firefox my-addon.xpi

usage instructions:

navigate to twitch.tv, browse to your favorite streamer, and pause the stream. Press the firefox logo in top left and you're good to go.

TODO:
new logo
support for qualities other than medium
support for windows, and findining livestreamer anywhere in the PATH
publish to official addons
maybe log some stuff?





