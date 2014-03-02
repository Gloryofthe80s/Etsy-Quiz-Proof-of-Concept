#
# Cookbook Name:: app
# Recipe:: default
#
# Copyright (C) 2014 YOUR_NAME
# 
# All rights reserved - Do Not Redistribute
#


include_recipe "nodejs"
include_recipe "npm"
include_recipe "mongodb"


# Install Composer
# bash "composer" do
#   code <<-EOH
#     curl -s https://getcomposer.org/installer | php
#     sudo mv composer.phar /usr/local/bin/composer
#   EOH
# end

#bash "gems" do
#   code <<-EOH
#     curl -s https://getcomposer.org/installer | php
#     sudo mv composer.phar /usr/local/bin/composer
#   EOH
# end

node['app']['npm_packages'].each do |a_package|
	npm_package a_package do
  		action :install
	end 
end
