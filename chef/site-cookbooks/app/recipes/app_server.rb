#
# Cookbook Name:: app
# Recipe:: default
#
# Copyright (C) 2014 YOUR_NAME
# 
# All rights reserved - Do Not Redistribute
#

# Makes sure apt is up to date
include_recipe "apt"

include_recipe "nodejs"
include_recipe "npm"
#include_recipe "mongodb"


# Install app packages
node['app']['packages'].each do |a_package|
  package a_package
end


node['app']['npm_packages'].each do |a_package|
	npm_package a_package do
  		action :install
	end 
end

