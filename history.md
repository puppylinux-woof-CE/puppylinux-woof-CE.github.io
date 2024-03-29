---
layout: default
title: Puppy Linux History
---
## Puppy Linux History

Puppy Linux was originally created by [Barry Kauler](http://bkhome.org/news) 
in 2003, as a smaller, leaner version of Vector Linux. 

From the [beginning](http://bkhome.org/archive/puppylinux/about.htm), the idea was to make a small, lean, yet 
complete edition of Linux distribution that was useful from the get-go: 
the downloaded ISO contains all the standard applications to handle usual
computing needs: word processor, spreadsheet, and web browser.
 
Another central idea that the OS would work off as a Live-CD, but
with support for _"persistence"_ - that is, keep data between reboot 
sessions. This way, the Live-CD can be used as if it is a fully installed
operating system. However, if user data is corrupted in any way, 
in a flick of a switch the persistence can be turned off and Puppy 
would boot in its pristine, Live-CD state.
 
Size has always been a major consideration. Linux of these early days
did not have good hardware support, thus Linux machines tend to be older
and more obsolete computers with older CPUs and little RAM and storage.
Also, broadband internet was not popular yet back then - many users
were still on dial-up which limited the download speed to 38Kbps.
So conscious decision were made to choose software components which
provides the maximum functionality at a given size; e.g. the choice of
ROX Filer as the file manager (which has stuck until today).



### The very beginning - Series 0.x
 
The first few releases were marked as 0.x versions, the last being
version 0.9. These early releases didn't use unionfs, thus the
persistence support was minimal; and only a few directories can keep
user changes.

Packages in Puppy Linux of this version was taken from Vector Linux
as well as self-compiled.



### Series 1.x

Series 1.x included major changes; the most obvious one being its use
of unionfs. This means entire Linux filesystem root can now be 
persisted.

Another major change was the UI make-up, this version started to use 
GTK as its widget toolkit, replacing the original Xlib toolkit used
in version 0.x.

This version also introduced the ever popular "Remaster" option which
enables anyone to make customise their Puppy installation by adding /
removing packages and configuring their system; and then make a new
Puppy ISO which contains all these changes.



### Series 2.x

Series 2.x was a breakthrough in many ways.

It saw the update of GTK from GTK1 to GTK2, as well as support
for more persistence modes - not only Puppy was able to keep its session
in a harddisk, but also in USB flash drive, and even in it is own CD
(if the CD is a CD-R or CD-RW). 

With the Linux kernel supporting better hardware support around the 
time of 2.x release, Puppy was able to run on newer machines with
complete support for networking, wifi, USB, sound, and video - making
it the idea work-and-entertainment Linux distro.

It also introduced the first version of Puppy whose packages
were built independently using T2 build system.

It also introduced *"Puppy Unleashed"* build system, a tool for
advanced users to build their own customised Puppy from scratch.

Series 2.x was very popular, and it was longest-running series ever.
The last version was 2.14, and that branch was kept alive and upgraded
by dedicated enthusiast forum members even until today.



### Series 3.x

Series 3.x is a short-lived branch. It was the first experiment
of basing off Puppy from other distributions - in this case, Slackware.

While some people stood by this series, many felt that in many ways
this was too experimental. The usage of a big-distro packages (Slackware) 
made it consume more memory than earlier Puppies, as well as made it
slower.

The latest version of this series was 3.0.1.



### Series 4.x

In this series, Puppy went back to its roots and used its own 
self-compiled packages from T2, which made it lean and fast again.

In addition, this version introduced the "Woof" build system.
The difference between "Woof" and "Puppy Unleashed" is that while
"Puppy Unleashed" used pre-packaged Puppy packages, the "Woof" build
system is able to build a Puppy directly from completely foreign distro packages.

While the official Puppy distributions in the 4.x series were all based
on T2 builds, Woof support's for other distro resulted in an explosion
of community-initiated puplets based on them:
 
 * Upup - a Woof-built puplet based on Ubuntu
 * Dpup - a Woof-built puplet based on Debian
 * Spup - a Woof-built puplet based on Slackware 
 * Apup - a Woof-built puplet based on Arch Linux

This version also introduced the release of _"Quirky"_ - which was
meant as a special release of Puppy Linux that contains experimental
features. The idea being, once those features matured (and considered
useful by the community), they would be integrated back to the 
mainstream release.

It is also in this version Barry indicated that he would step down
from his role as Puppy benevolent dictator and would focus instead
on maintaining "Woof"; hoping that the community would take the baton
and do the Puppy-building themselves.

The latest version of 4.x was 4.3.1.

Just like Series 2.x, there where community members who hold 
steadfastly to this series and keep maintaining it beyond long after
Barry was finished with it, until today.



### Version 5.x

This version saw the first official Puppy Linux distro ("official" as in
being endorsed by Barry) which was not released by Barry. It also marked
the first time that there are _**four**_ concurrent official Puppy releases.

**Lucid Puppy**

The first official Puppy Linux of Series 5.x grew up from _Upup_ - 
a Woof-built Puppy from Ubuntu packages. It was called Luci during its 
development and proclaimed as Lucid Puppy (aka _Lupu_) upon release. 
It was developed and maintained by Larry Short (aka _playdayz_). 

Lupu proved to be very popular. It was the first good-looking
Puppy, it was the first Puppy which had great focus on user-friendliness
("Linux distro for Windows refugee" was first coined during Series 5.x),
it was the first non-CE release that was built from community feedback,
and it had the backings of immense number of Ubuntu packages, 
many of them directly installable and usable from its package manager.

Lupu was and is very popular and different forks are still maintained
by different people until today, after Larry stepped down and ended
his support. It is still popular even after Ubuntu itself discontinued
support for Ubuntu Lucid Lynx, the distro on which Lupu was based.

**Wary Puppy**

The second official Puppy is from Barry himself, and not
as popular as the Lupu or Slacko: Wary Puppy.

Wary Puppy was offered as a direct upgrade to Puppy Linux 4.3.1
and was targeted for older computers with milder requirements compared 
to Lupu or Slacko. It also featured older kernels with support for 
older and obsolete hardware, like analog dial-up modems which are
no longer supported by newer kernels. Wary Puppy intended to 
keep these older computers functional and useful.

Wary Puppy was built from self-compiled T2 packages; it
was offered for those who considered that Lupu/Slacko was too heavy for 
their machines.

**Slacko Puppy**

The third official Puppy Linux of Series 5.x is Slacko Puppy, aka
Puppy Linux Slacko, which grew out of _Slackpup_ - a Woof-built Puppy
from Slackware packages. It was called Slacko during development and
the name stuck for its released name as well. It was developed and
maintained by Mick Amadio (aka _01micko_).

Like Lupu, Slacko was also very popular due to its friendliness and
incorporating a lot of community feedback, just like Lupu.
It went through a few releases on its own, the latest being Slacko 5.7;
which still has its fan base till today.

These two releases marked the beginning of Puppy support for more
modern hardware. They both have higher requirements than Puppies of the
past but they offer much better experience on those whose hardware can
support them.

**Racy Puppy**

The fourth official puppy in the 5 series was another by Barry; Racy Puppy.
He billed it as "Wary on steroids" and featured a PAE kernel and a later
version of Xorg. 

Racy Puppy was like Wary but is targeted for newer computers, and is
offered as a utilitarian Puppy with lesser bells and whistles than
either Lupu or Slacko (traditionally, all prior Puppies were like 
this).

Racy Puppy was built from self-compiled T2 packages; which were the same
core packages that were used to build Wary Puppy.

**Precise Puppy**

Precise Puppy was the fifth to be released in the 5 series again by
Barry. This was built with Ubuntu binary compatibility from Precise
Pangolin packages and was typical of Barry's pups with less bells
and whistles but still required a slightly more modern machine than
Wary's target.

Barry promoted Precise as an "LTS" release much like Ubuntu Precise Pangolin.
Updates were released for almost a year making it very well supported.  

It proved to be the most popular of Barry's offerings in the 5
series and still has its fan base today.

### Series 6.x

Series 6.x Puppy is a fully community effort.

Barry stepped down from Puppy **and** Woof effort, leaving everything
to the stewards of the community to continue development of everything
Puppy-related. From then on, the Puppy Linux Team is in-charge to 
keep Puppy moving forward.

The Woof build system is renamed as "Woof-CE" (Woof Community Edition)
to further reflect its status that it now accepts community contributions.
The first release of Puppy Linux built on Woof-CE marked the beginning
of Series 6.x Puppy. 

As of this date, there are two Series 6.x puppies.

The first one is Tahrpup CE 6.0, a Puppy whose packages comes from
Ubuntu Trusty Tahr. Tahrpup started as a project to upgrade Lupu to
make use of the newer Tahr packages, so it is the spiritual successor
to Lupu. 
It was developed and maintained by Phil Broughton (aka _666philb_).

The second one is Slacko Puppy 6.3, direct successor to Slacko 5.7.

This release also marked Puppy Linux moving forward to support 64-bit
machines (previous Puppy have always been able to run in 64-bit
machines, but only in 32-bit mode). Both Tahrpup and Slacko Puppy
offers 64-bit editions as well as the regular 32-bit versions.



## Community Editions

Community involvement has been the tradition of Puppy Linux from
day one. 

Before the launch of "Woof", Barry was fully in charge of releasing
Puppy Linux. Once a while however, Barry encouraged the community to take 
the latest release, enhance it in any way they see fit, and release it
as a _"Community Edition" (CE)_ Puppy with his endorsement.

A CE release is usually coordinated by a community-appointed
"project manager", and supported by a few "core" developers who
did the actual customisations - code, packages, artwork, etc, based
on feedback on the community. CE project usually runs between one to
three months with many releases in between to test for community feedback
before the final release.

CE releases usually provide richer experiences than standard
releases; they are usually better looking and more user-friendly due
to many contributions and integration of feedback from community during 
their development.

Every series had its CE release. Series 1.x has 1.09-CE; Series 2 has 
2.15CE, series 4.x has 4.2 and 4.2.1CE. 

After the release of "Woof", every Puppy release is virtually a CE
release. With woof, everyone can build their custom Puppy from 
scratch in the same way that Barry himself built the official Puppies.

For example, Series 5.x Puppy is virtually a CE release by every
definition except by name. Series 6.x Puppy (Puppies based on Woof-CE) 
are all CE releases - both Slacko Puppy and Tahrpup (Tahrpup even has
CE as its name).



## Puplets

Another aspect of community involvement in Puppy Linux is the popularity
of _puplets_ ("puppy lites"). 

One of Puppy design aspect was to make it easy to make a _"remaster"_,
that is, a new Puppy ISO that contains pre-installed applications and
configurations. 

The ease on how remasters is made has made various members of 
community to make their own custom remaster, specific enough for their
purposes, but general enough for use by others; so they offer them up
for others.

These custom remasters are known as "puplets"; and there are hundreds
of them. You can almost always find a puplet that meet your needs.

There are puplets that are tailored for heavy office applications; these
comes with Libreoffice included. There are puplets meant for use in kiosks;
these comes with only web-browser pre-configured to run in kiosk mode.
There are puplets for authoring audio; puplets for running webservers;
puplets for numerical computation, puplets for multimedia entertainment,
"barebone" puplets meant as a base to build others, etc.

Although they are not considered official in any way, they are by any
means part of the Puppy Linux family and its rich history.
They are the best examples of the values that Puppy Linux can offer - 
its flexibility and its enthusiastic community involvement.


<p id="family"/>
## Puppy Linux Family

Puppy Linux is an old, mature distribution. Its ideas, principles and
spirit have been well tested and well known for many years. It is
therefore of no surprise to see other distributions that share the same
principles and ideas. Some of them even behave very closely like 
Puppy.

These are distributions which are inspired in one way or another, from
Puppy Linux. We consider them as a "derivative" in spirit, in idea.
We call them as "_offshots_" to differentiate them from puplets, which 
is a true derivative.

Some of these offshots are forks of Puppy. Fatdog64, for example, was
forked from Puppy Linux when it was at version 4.0. Although it is now
an independently managed distribution and shares almost no code with 
the original Puppy it came from, it still claims to live up to 
Puppy's ideals: small, fast, and versatile.

Some of the other offshots are inspired by the idea of Puppy Linux and
adapts it for use in another distribution. DebianDog, for example,
is an offshot of this type. It takes Debian Live-CD and molds it so
it behaves very similarly with Puppy Linux.

Some takes a puplet and molds it into something that is more user
friendly and called it something totally different (but acknowledges
the source), for example, Simplicity Linux.

All of these distros are no longer considered as part of Puppy Linux 
distribution, but one can be mistaken to think that they are - because
of their likeness and their similar behaviours. All of these 
distributions acknowledge that they owe their existence to Puppy Linux;
if not directly in code, then in idea or in spirit.

Many of these distributions cross-share their improvements to each 
other; many of these distributions' discussion are hosted in the same 
Puppy Linux forum (in different, distro-specific threads). 
Many of their developers and maintainers cross-post and comments on 
distributions different than their own. 
Many users of these distributions hop from one to another, and talk about
them as if they are all Puppy. 
Indeed, _in spirit_, they all are. _**All**_ of these distribution
developers and maintainers were Puppy Linux users in the past,
who decided to improve it on their own, one way or another.


As such, it is just natural to consider them as part of the larger 
Puppy Linux community. This larger group is called as Puppy Linux family
distributions: it includes all of the Puppy Linux distribution releases, puplets, 
and these offshots too.



## Closing Note

If you have read it this far, you may also be interested to know
more about various Puppy Linux distributions that have been released
in the past, and their relationship to one another. Head on to 
[Puppy Linux Family Tree](family-tree.html) to satisfy your curiosity.

