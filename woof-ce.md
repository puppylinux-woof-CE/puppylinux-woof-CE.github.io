---
layout: default
title: Puppy Linux Woof-CE
---
## Puppy Linux Woof-CE

Woof-CE is a collection of build scripts that will automatically
build a Puppy Linux distribution from scratch. It is versatile and very
flexible. To build a Puppy, Woof can use puppy-specific, self-compiled packages
(pets) and packages from another distribution called the _"binary compatible"_
distribution (e.g. Ubuntu, Slackware) or it can use only self-compiled
packages. It supports multiple architectures (x86, x86_64 and arm).

Puppy Linux Woof-CE is **the** official build system for making a Puppy
Linux distribution, going forward. 
If it is not built from Woof-CE, it is not a Puppy.


### The name

_Woof-CE_ stands for _Woof Community Edition_. The name _Woof_ itself
is chosen because ... well, what's more appropriate then a sound of 
a dog's bark to indicate a presence of a new distribution, if the
distribution's name itself is _Puppy_? ☺


### Building Puppy from Woof-CE.

There are a few prerequisites to building a woof-CE based Puppy:
  
  * a modern Puppy; one built from woof-CE is best.
  
  * the `devx` sfs module must be loaded. It contains some essentials
    like the _git_ program.
    
  * a partition with no less than 10 GB of free space with a _Linux filesystem_ 
    


<br/>
1. Make a local clone of Woof-CE repository:
   
`git clone https://github.com/puppylinux-woof-CE/woof-CE.git`
	
<br/>
2. Once downloaded you will have the latest code of woof-CE. Change into the 
   cloned repository directory:
   
`cd woof-CE`
	
<br/>
3. Run the script `merge2out` and choose the host arch.


    # ./merge2out

	This script merges woof-arch, woof-code and woof-distro, to ../woof-out_*.
	
	woof-arch:  architecture-dependent (x86, arm) files, mostly binary executables.
	woof-code:  the core of Woof. Mostly scripts.
	woof-distro: distro-configuration (Debian, Slackware, etc.) files.
	kernel-kit: puppy-kernel build script and configuration files
	
	Important: the host architecture is distinct from the target architecture.
	The host is the machine you are running Woof on, the target is the machine
	in which the Puppy that you build is going to run. Typically, you will build
	on a x86 machine, and the target may be x86 or arm.
	
	1  arm
	2  x86
	3  x86_64
	Type number of host architecture: 2
	...ok, x86

 
Choose target arch.


	1  arm
	2  x86
	3  x86_64
	Type number of target architecture: 2
	...ok, x86
	
	
Choose the _binary compatible_ distro for your Puppy.

	Woof builds a Puppy based on the binary packages from another distro.
	We sometimes refer to this as the "compat-distro".
	
	1  arch
	2  debian
	3  devuan
	4  mageia
	5  pet-based
	6  scientific
	7  slackware
	8  t2
	9  trisquel
	10  ubuntu
	Type number of compat-distro: 7
	...ok, slackware

Choose the version of the _binary compatible_ distro.


	The compat-distro usually has release versions, unless it is a rolling
	release system such as Arch Linux. Please choose which release you want to
	obtain the binary packages from.
	1  13.1
	2  13.37
	3  14.0
	4  14.1
	Type number of release: 4
	...ok, 14.1
	
	Choices:
	Host architecture:     x86
	Target architecture:   x86
	Compatible-distro:     slackware
	Compat-distro version: 14.1
	
	If these are ok, press ENTER, other CTRL-C to quit:


If you are happy, it's just a matter of reading the prompts and selecting
[Enter] and in a matter of moments you will have a new woof tree set up
to build your shiny new Puppy.

	
	Directory '../woof-out_x86_x86_slackware_14.1'
	is now normal, that is, the workarounds have been removed. Note,
	../local-repositories has been created (if not already), to be used as a common
	binary package download place. 'packages-pet' and 'packages-tgz_txz-14.1'
	have been created that link into it, where pkgs will be downloaded to.

<br/>
4. Change into your new woof-out* directory.

   `cd ../woof-out_x86_x86_slackware_14.1`
<br/>   
5. Now run the following commands in order, waiting for each to complete! 
(This can take a long time! Especially on first run when all packages need
to be downloaded ~ around 600MB of packages.)


	./0setup 
	./1download 
	./2createpackages 
	./3builddistro-Z


If all goes well, you will have a nice new ISO image in the 
`woof-out_x86_x86_slackware_14.1/woof-output*` directory.

>**Note**: At the time of writing _not all_ distro choices are tested 
working. Known working distros are Slackware 14.1 (Slacko), Ubuntu Trusty Tahr
(Tahrpup) and  Trisquel Belenos (Librepup).


### Contributing

Woof-CE is kept on [github.com](https://github.com/puppylinux-woof-CE/woof-CE).
Everybody is welcome to download and use it to build a Puppy, or even
fork it.

But if you want your modifications to be included and used for future
puppies, they must be merged back to the original Woof-CE repository.
To merge that, you need to send a patch or better yet a pull request
to the Woof-CE repository.

The [Woof-CE members](team.html#stewards) will then consider your 
request and merge them if they feel that your changes are beneficial 
for everyone. If your patch is not accepted, don't feel bad. Often
it is just a little changes you need to apply before resubmitting
the request again. Even if the rejection is final, be glad to know
the puppy you build with your changes is now unique - no other puppy
will work like it because it's the only one that has your unique changes.





