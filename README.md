[V12 Brasil Angular Universal](https://v12brasilhospedagem.com.br) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/v12brasil)


 ![version](https://img.shields.io/badge/version-1.2.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/blk-design-system-angular.svg?maxAge=2592000)](https://github.com/creativetimofficial/blk-design-system-angular/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/blk-design-system-angular.svg?maxAge=2592000)](https://github.com/creativetimofficial/blk-design-system-angular/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

**[V12 Brasil Angular Universal](https://v12brasilhospedagem.com.br)** is a responsive Bootstrap 4 kit, developed using 
[Angular](https://angular.io/) and it is provided for free by Creative Tim. It is a beautiful cross-platform UI kit featuring 
over 70 elements and 3 templates.

Blk• Design  System Angular will help you create a clean and simple website that is a perfect fit for today's black design. 
It is built using the 12 column grid system, with components designed to fit together perfectly. 
It makes use of bold colours, beautiful typography, clear photography and spacious arrangements.

## Complex Documentation

Each element is well presented in a very complex documentation. You can read more about the idea behind this design system here. 
You can check the components here and the foundation here.

## Bootstrap 4 Support

Blk• Design System Angular is built on top of the much awaited Bootstrap 4 and Angular. 
This makes starting a new project very simple. It also provides benefits if you are already working on a Bootstrap 4 or Angular project; 
you can just import the Blk• Design System Angular style over it. Most of the elements have been redesigned; 
but if you are using an element we have not touched, it will fall back to the Bootstrap default.

## Quick start

- `npm i blk-design-system-angular`
- [Download from Github](https://github.com/creativetimofficial/blk-design-system-angular/archive/master.zip).
- [Download from Creative Tim](https://www.creative-tim.com/product/blk-design-system-angular).
- Clone the repo: `git clone https://github.com/creativetimofficial/blk-design-system-angular.git`.

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


## Documentation
The documentation for the BLK Design System Angular is hosted at our [website](https://demos.creative-tim.com/blk-design-system-angular/#/documentation/overview).


## File Structure
Within the download you'll find the following directories and files:

```
Blk• Design System Angular
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── e2e
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── pages
│   │       ├── examples
│   │       │   ├── landingpage
│   │       │   │   ├── landingpage.component.html
│   │       │   │   └── landingpage.component.ts
│   │       │   ├── profilepage
│   │       │   │   ├── profilepage.component.html
│   │       │   │   └── profilepage.component.ts
│   │       │   └── registerpage
│   │       │       ├── registerpage.component.html
│   │       │       └── registerpage.component.ts
│   │       ├── index
│   │       │   ├── index.component.html
│   │       │   └── index.component.ts
│   │       └── pages.module.ts
│   ├── assets
│   │   ├── css
│   │   │   └── nucleo-icons.css
│   │   ├── demo
│   │   ├── fonts
│   │   ├── img
│   │   └── scss
│   │       ├── blk-design-system
│   │       │   ├── angular
│   │       │   ├── bootstrap
│   │       │   └── custom
│   │       └── blk-design-system.scss
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json
```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">



## Resources
- Demo: <https://demos.creative-tim.com/blk-design-system-angular/#/>
- Download Page: <https://www.creative-tim.com/product/blk-design-system-angular>
- Documentation: <https://demos.creative-tim.com/blk-design-system-angular/#/documentation/overview>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/blk-design-system-angular/issues)
- **Dashboards:**

## Reporting Issues

We use GitHub Issues as the official bug tracker for the BLK Design System Angular. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the BLK Design System Angular. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=blkdsa-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2018 V12-Brasil (https://www.v12brasil.com.br)

- Licensed under MIT (LICENSE.md)