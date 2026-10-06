---
name: server-hardening
summary: Script que aplica um hardening básico em servidores Ubuntu, com firewall e proteção contra força bruta.
highlights:
  - Atualiza os pacotes do sistema
  - Instala e configura o firewall ufw (portas 22 e 80)
  - Ativa o fail2ban e o habilita no boot
  - Exibe um relatório de status ao final
stack: [Bash, ufw, fail2ban, systemd]
repo: https://github.com/LuiszOtavio/server-hardening
order: 2
---
