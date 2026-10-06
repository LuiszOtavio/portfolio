---
name: server-hardening
summary: Script that applies basic hardening to Ubuntu servers, with a firewall and brute-force protection.
highlights:
  - Updates system packages
  - Installs and configures the ufw firewall (ports 22 and 80)
  - Starts fail2ban and enables it at boot
  - Prints a status report at the end
stack: [Bash, ufw, fail2ban, systemd]
repo: https://github.com/LuiszOtavio/server-hardening
order: 2
---
