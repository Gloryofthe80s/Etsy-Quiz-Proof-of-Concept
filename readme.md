#etsworth

##Quickstart

If you know you have the dependencies installed... go for it!

###Dev Environment

```
    $ git clone https://github.com/Gloryofthe80s/Router_Example
    $ cd {project_directory/chef}
    $ vagrant up
```
- enter password when prompted
- wait like 10 minutes
- Access site at http://etsworth.dev
- Get to work!

###Deployment
...

# Development Environment

The next steps will guide you through an automated development environment that has been configured using Vagrant and Chef-Solo to run in an Ubuntu virtual machine closely matching production.  When you are finished, your development environment will have high parity with production and other developers' environments.  You should also be able to get up and ready to develop in about an hour of beginning this tutorial.


###Dependencies
- Ruby 2.x >= ([RVM](https://rvm.io/) recommended) 
    - (Gems: Capistrano 3.x >=, berkshelf 3.x >= )
- [Virtual Box](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant](http://vagrantup.com) 1.4.x >= 
    - Plugins: [vagrant-berkshelf](https://github.com/berkshelf/vagrant-berkshelf), [vagrant-hostmanager](https://github.com/smdahlen/vagrant-hostmanager)
- git 1.8.x >=

###Conifigure SSH Keys

Configure your public/private key pair in your BitBucket account.

###Install Dependencies

The following applies to OSX 10.9 >=

#####OSX Developer Tools

    # Ensure OSX developer tools are installed
    $ xcode-select --install

#####Ruby
Ruby is required and [RVM](https://rvm.io/) is the recommended way of managing your versions and gems.

    # Install RVM
    $ \curl -sSL https://get.rvm.io | bash -s stable
    $ rvm use 2.1.0 --default

Configure RVM if necessary.

#####Gems

[Berkshelf](http://berkshelf.com) - Chef cookbook dependency manager
[Capistrano](http://capistranorb.com/documentation/getting-started/installation/) - Application Deployment

    $ gem install berkshelf --no-ri --no-rdoc
    # If this hangs, kill the process and rerun the command.

    $ gem install capistrano  --no-ri --no-rdoc

#####Vagrant Plugins

    $ vagrant plugin install vagrant-hostmanager
    $ vagrant plugin install vagrant-berkshelf
