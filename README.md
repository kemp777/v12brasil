## Linux Systemd service

O site para funcionar roda como serviço do Linux, utilizando o nodejs como interpretador apontando para o javascript do site.

Abaixo segue a configuração para criar um serviço do Linux (Systemd) na pasta especificada abaixo:
- `/etc/systemd/system`

```
[Unit]
Description=V12 Brasil - Angular Universal
After=network.target

[Service]
StandardInput=tty-force
Type=simple
ExecStart=/bin/bash -c 'cd /home/wwv12b/public_html/dist/v12-seo-angular/server/ && nohup $$(which node) main.js'
Environment=CI=true
WorkingDirectory=/home/wwv12b/
StandardOutput=syslog
StandardError=syslog
Restart=on-failure
User=v12brasilhost
SyslogIdentifier=V12Angular

[Install]
WantedBy=multi-user.target
```

Ver logs apache
tail -f /var/log/apache2/access_log
tail -f /var/log/apache2/error_log

Ver log de segurança
tail -f /var/log/secure

Iniciar Serviço
systemctl start v12brasil.service

Parar Serviço
systemctl stop v12brasil.service