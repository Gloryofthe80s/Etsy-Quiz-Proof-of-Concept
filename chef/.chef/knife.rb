environment_path "environments"
if ::File.exist?(File.expand_path("~/.chef/knife.rb", __FILE__))
  Chef::Config.from_file(File.expand_path("~/.chef/knife.rb", __FILE__))
end
