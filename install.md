---
layout: default
title: Puppy Linux Installation and Usage
---
## Puppy Linux Installation and Usage

The fact is that you do not need to install Puppy Linux at all! You can 
simply [download](index.html#download) and burn it to an optical disc
(CD, DVD, CD&plusmn;RW, DVD&plusmn;RW) or _dd_ it to an USB drive and
boot it _live_. 

### Burning an Optical disc or preparing a USB Drive

#### Optical

In any Linux, once you have downloaded the ISO image and verified its
authenticity by checking its _md5sum_ you can burn it to a DVD or a CD
using any Linux optical burning tool. Just make sure you burn it as an
_image_ and not _data_ otherwise it will not be bootable.

In Windows we recommend 
[Imageburn (direct link to download)](http://www.datafilehost.com/download-fe571dfa.htm)
to burn the image to a CD or DVD.

#### USB

All Linux versions come with a tool name _dd_. Our ISO images since
2013 come as _iso hybrid_ images so they can be transferred directly to 
the USB drive using _dd_. _Don't attempt this with older puppy versions unless 
you know what you are doing_. Here is a simple 
[tutorial](http://it.toolbox.com/blogs/enlightenment/howto-create-a-bootable-linux-media-using-the-dd-command-65907) 
on using _dd_ to make a bootable USB drive. _Be very careful with your target 
drive name!_

There is a Windows version of _dd_ available on this
[site](http://www.chrysocome.net/dd).

There is also a graphical tool for Windows called _Win32 Disk Imager_.
A download is available from 
[this page](https://drive.google.com/folderview?id=0B_iVVJCd9q09VGZsZE5keU1vR0E&usp=sharing).

#### Booting

Depending on whether you have optical or USB media you may have to go into
your computer's _BIOS Setup_ program to adjust the boot order of devices.
You want to give your optical or USB ports priority over the harddrive.

Once you have your boot media and computer set up just insert the boot
media and switch on your computer. You will see a couple of text screens
go past and hopefully you will boot to a shiny new _desktop_ with
a quick setup screen followed by a welcome screen.   

Now enjoy!

When you are finished you can decide to save the session
or not! Not saving the session does not leave a trace of the operating 
system as Puppy runs entirely in RAM and as soon as the computer is
powered off the RAM is flushed. This is ideal from a security perspective
for internet banking or other sensitive financial transactions performed
over the internet.

Saving the session can be achieved in a number of ways:
 
 * You can save the session to a harddrive or an USB drive in a vfat,
    ntfs or linux<sup><a href="#part">[1]</a></sup> partition. This 
    will save all your settings to what is known as a _pupsave_
    <sup><a href="#save">[2]</a></sup> file or folder. When you boot off the 
    same media next time the _pupsave_ will be found and all your files
    and settings will be as you left them. 
 
 * If you booted off of optical media you can save the session and all
    settings back to that same optical disc.
    
### So you want to _install_ Puppy

Naturally you can actually install Puppy if you wish. Once you boot Puppy
and are happy with what you see it is time to open the _Puppy Installer_
from _Setup_ in the main menu. There are 3 main types of install; _frugal_,
_USB_ and traditional _full_ install.

#### 1. Frugal install (**Recommended**)
    
>**This type of install copies the main puppy files from the boot
media (either optical or USB) to your harddrive**. Firstly, you are
presented with some information about your system and what partitions
you have available. If you don't have a suitable partition then you can
use the included graphical partition manager _GParted_ to shrink and 
move partitions as necessary to created a partition for your installation.
Once this is done you are prompted for the location of your boot
media files (either an iso image, optical media or just the files
themselves) and once confirmed these are copied to a folder in your
chosen partition. A _bootloader_ is then installed and once finished
you can reboot into your new system.

>This will be a pristine system that requires you to save your session at 
shut down if you want to keep your settings. Once saving the session
is complete, a _pupsave_ file or folder is created. On you next boot
your files and settings will be exactly as you left them at last shutdown.
    
#### 2. USB Install (**Recommended**)
  
>**This type of install copies the main puppy files from the boot
media (either optical or USB) to your chosen USB drive**. Firstly, you 
should insert the USB drive that you want to use for installation. Again 
using the graphical partition manager _GParted_ you need to make sure
that there is a suitable partition on the USB drive. This can be formatted
to _fat32_ Windows™ style filesystem (good for portability if you want 
to use the drive as storage to be used between Linux and Windows™) or 
one of the supported Linux filesystems. (**Note**: not all Puppies
support the f2fs filesystem. The installer is intelligent enough
to know this.) Again, you are prompted for the location of your boot
media files (either an iso image, optical media or just the files
themselves) and once confirmed these are copied to a folder in your
chosen USB drive. A _bootloader_ is then installed and once finished
you can reboot into your new system. This can be booted on any computer
you like! This is also a type of _frugal_ installation.

>Again, this will be a pristine system that requires you to save your 
session at shut down if you want to keep your settings. Once saving the 
session is complete, a _pupsave_ file or folder is created. On you next 
boot your files and settings will be exactly as you left them at last 
shutdown.
    
#### 3. Full Install
  
>**This is a traditonal Linux install to its own dedicated partition.**
If you don't have a suitable partition then you can
use the included graphical partition manager _GParted_ to shrink and 
move partitions as necessary to created a partition for your installation.
**You must use a Linux filesystem**.
Once this is done you are prompted for the location of your boot
media files (either an iso image, optical media or just the files
themselves) and once confirmed these are _expanded_ in your
chosen partition. A _bootloader_ is then installed and once finished
you can reboot into your new system.

>Once booted this will act like any other Linux installation.

### Using Puppy

Puppy is famous for its ease of use. The desktop layout is traditional
with a task bar at the bottom (or top) and icons on the desktop. Anyone
coming from Windows™, Mac OSX™ or another Linux such as Ubuntu, Fedora or
Arch will have little issue getting used to it. The interface is a typical 
WIMP style (Windows, Icons, Menus and a Pointing device).

While puppy comes with almost everything you need to write, calculate, enjoy 
videos and music, create artwork, work with your digital camera, and more
there invariably comes a time when you need an an extra piece of software.
Extra software comes in the form of _pet_ packages which can be installed
through the Puppy Package Manager or by downloading from a trusted source and
simply clicking on the package. Puppy also has the capability of installing
_deb_, _rpm_ and _tgz/txz_ packages from Debian family, Red Hat family and 
Slackware family of Linux operating systems.

The way Puppy is designed, if you use a _frugal_ type install, software can
be installed as an _sfs_ (Squash File System) package. This is the preferred 
method to install very large packages such as _LibreOffice_. In fact the Puppy
development environment, including the _GNU Compiler Collection_ (GCC) and 
development libraries and headers, is shipped as an _sfs_; a separate download 
to the main ISO image. There is a tool call _SFS Load_ which makes installing 
these packages a one step process. _The sfs packages do not work on a full 
install_.

Once you have been using Puppy for a little while you may want to try a
_remaster_ (see [FAQ](faq.html)). This saves the state of your current
installed system (minus some the personal stuff) to a burnable ISO image. 
This enables you to have your system setup and ready to go if you have
several computers or you can share your remaster as a _puplet_ with the
community.

<br/>

**However you decide to install (or _not_) Puppy Linux, we hope you enjoy
using it for years to come!**

<br/>

#### Notes

_While we recommend **frugal** or **USB** installations the choice is entirely
yours._

<a id="part">[1]</a> Some common Linux filesystems that Puppy 
supports are ext2, ext3, ext4, f2fs. Windows™ filesystems supported are
fat16, fat32 and ntfs.

<a id="save">[2]</a> A _pupsave_ **file** is a file that contains a linux
_filesystem_. It can be stored on any supported partition. It is a fixed size
and can be as small as 32MB and as large as 4GB (on fat32) and even larger
on other filesystems. The _pupsave_ file can be enlarged later on, but the
challenge is to keep your system trim and clean by regularly deleting
browser cache, cleaning up any stray files and storing other stuff outside
the save file.

A _pupsave_ **folder** can only be created on a _linux_ filesystem. This 
allows you to store as much as your partition can hold.

