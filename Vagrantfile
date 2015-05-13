Vagrant.configure("2") do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.network "forwarded_port", guest: 3000, host: 3000
    config.vm.network "forwarded_port", guest: 5858, host: 5858
    config.vm.provision :shell, :path => "provision.sh", privileged: false
    config.vm.synced_folder ".", "/vagrant", disabled: true
    config.vm.synced_folder ".", "/srv/", type: "rsync",
        rsync__exclude: [".git/", "node_modules/"]
end