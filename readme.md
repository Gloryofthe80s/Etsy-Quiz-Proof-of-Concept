#Etsworth

##Quickstart

If you know you have the dependencies installed... go for it!

    $ git clone https://github.com/Gloryofthe80s/Router_Example
    $ cd {project_directory/chef}
    $ vagrant up

- enter password when prompted
- wait like 10 minutes
- Access site at http://etsworth.dev
- Get to work!


# Development Environment

The next steps will guide you through an automated development environment that has been configured using Vagrant and Chef-Solo to run in an Ubuntu virtual machine closely matching production.  When you are finished, your development environment will have high parity with production and other developers' environments.  You should also be able to get up and ready to develop in about an hour of beginning this tutorial.


###Dependencies
- Ruby 2.x >= ([RVM](https://rvm.io/) recommended) 
    - (berkshelf 3.x >= )
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


    $ gem install berkshelf --no-ri --no-rdoc
    # If this hangs, kill the process and rerun the command.

#####Vagrant Plugins

    $ vagrant plugin install vagrant-hostmanager
    $ vagrant plugin install vagrant-berkshelf

#####Provision Virtual Machine

You must have installed all depencies from the previous section for these commands to complete.

    $ git clone {repo_url}
    $ cd {project_directory}
    $ vagrant up
    $ vagrant ssh
    $ cd {project_directory}
    $ npm install
    $ bower install
    $ grunt serve & disown

#App Deployment

Quick and dirty

(Kill existing grunt serve if running)

    $ ssh {user}@{server_api}
    $ cd /srv/www/
    $ git clone {repo_url} {project_name}
    $ cd {projec_name}
    $ npm install
    $ bower install --allow-root
    $ grunt serve & disown

#Server Provisioning
This section not for the faint of heart.

#####Helpful links
[Knife digital ocean](https://github.com/rmoriz/knife-digital_ocean)

[Knife-solo berkshelf integration doc](https://github.com/matschaffer/knife-solo/wiki/Berkshelf-&-Librarian-Chef-integration)

####Digital Ocean Example


#####Install Packages for [Chef](http://docs.opscode.com/install_workstation.html)

Install Ruby if you don't have it.

    $ \curl -sSL https://get.rvm.io | bash -s stable
    $ rvm use 2.1.0 --default

Install Gems

    $ gem install chef --no-ri --no-rdoc
    $ gem install berkshelf --no-ri --no-rdoc
    $ gem install knife-solo --no-ri --no-rdoc
    $ gem install foodcritic --no-ri --no-rdoc
    $ gem install knife-digital_ocean --no-ri --no-rdoc

- Configure ssh key with digital ocean
- Configure knife api keys in ~/.chef/knife.rb 

-

    knife[:digital_ocean_client_id] = 'your_client_id'
    knife[:digital_ocean_api_key] = 'your_api_key'

Ensure you are configured correctly

    knife digital_ocean droplet list

Provision

    $ cd {project_directory}
    $ knife digital_ocean droplet create -N {hostname} --ssh-keys {key-id} --image {image-id} --location 1 --size 66 --solo

(For the future) Update server config

    $ knife solo cook root@{ip} nodes/{hostname}.json

- Configure DNS at digitalocean.com
- Hope for the best :)
