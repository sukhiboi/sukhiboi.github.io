---
title: Tools to boost daily dev tasks
date: 2022-11-02
--- 

In daily life as dev, there are tasks we do repetitively, but don't realise how much time could have been saved or spent on something else.

For example
- using `cd` to deep dive 5 level of dirs to find a project
- running a command on terminal everytime time to get the current IP address or find what processes are running and their PID
- (for me the worst of all is) doing `CMD+<TAB>` to find the desired application.

Following are some tools and programs which can speed these tasks up.

## Terminal

Terminal is one of the most important tool for a dev. I find [Alacritty](https://github.com/alacritty/alacritty) clean and simple to work on. The cool thing about this terminal is that it is superfast and fully configurable.

> Check out my [Alacritty Config](https://github.com/sukhiboi/dotfiles/blob/main/.config/alacritty/alacritty.yml)

Combine it with [Tmux](https://github.com/tmux/tmux) to get multiple windows and panes support.t

## Workspace

#### MacOS Status Bar

This is something I started using recently. [SketchyBar](https://github.com/FelixKratz/SketchyBar) allows customizing macOS status bar with **shell scripts** (which is amazing).

The program comes with few pre-written shell scripts for basic widgets (*plugins*), but allow adding more.

- Battery (Built In)
- Data and Time (Built In, but I customized it)
- Docker widget, to tell me if my docker is running (because I run it with Colima).
- An internet widget, to tell me which network I'm connected to currently and what is IP address.

Check out my custom plugins and SketchyBar config on [SketchyBar config](https://github.com/sukhiboi/dotfiles/tree/main/sketchybar)

#### Multiple desktops

This introduced me to way of working with multiple workspaces (desktops in macOS) and assign specific programs to each of the desktops.

MacOS have shortcuts to switch between different desktops quickly. Create multiple desktops (10 desktops), after that go to *System Preferences > Keyboard > Shortcuts* and check all *Switch to desktop ${n}* shortcuts.

> Reduce the animation while switching desktops. It can be found in *System Preferences > Accessibility > Display > Reduce Motion*

Sketchy bar also support for multiple desktops. It allows naming desktops, and it shows on status bar with highlighting which desktop is currently active.

#### Window Managers

I saw few of my colleagues using window mangers which can tile windows, move them to different desktops, adjust their sizes and few more things which was fascinating. So I decided to give it a try, and installed [Amethyst](https://github.com/ianyh/Amethyst)

There is a good amount of things amethyst can do and for everything there is shortcut. Learning shortcuts and concept  was a bit hard, but after spending some time with it, it's really easy to switch between different apps and organising them.

## IDE

I've been working on IntelliJ Idea Ultimate for more than 1 year now, and have grown over it. I've customised it over time. I love apps and websites with clean UI, so I configured it that way and disabled all the distracting things.

#### Syncing Settings

I sync all my Intellij setting in a git repo. The setup settings can be found in the *File > Manage IDE Settings > Setting Repository*. Check out my [Intellij setting repo](https://github.com/sukhiboi/intellijSettings). These settings basically remove all the actions bars that are visible by default.

#### Themes

Dracula theme that IntelliJ gives out of the box is really nice. It doesn't hurt the eyes, the colors are neutral, and it overall looks good.

#### Icon Themes

Default icon theme is comfortable, so never face a need to change.

#### Plugins

Currently I'm using...
- Styled Component (For syntax highlighting, and auto-completion)
- IdeaVim (I use this because I use vim a lot, and once I tried to do my day-to-day coding on vim)
- Prettier

## Command Line Tools

#### Vim

Any small changes that I want to make, I don't like to go to Intellij or VSCode. Just fire up vim and make changes. This doesn't need to be vim, it can be nano.

#### AutoJump

It is very convenient to not write the full path or cd multiple dirs to open a project dir in terminal. AutoJump keep tracks of all the visited dirs, and open them with just project dir name. It's been very useful and time saviour.

#### Jq

Quickly parse JSON responses directly in terminal. Hitting an API which responds in JSON, just pass it to jq and transform it.

#### Htop

A dashboard tool which show what all processes running and CPU stats with ability to perform different operations on it.