# Shikimori

Shikilove - is a convenient tool for tracking anime, based on the Shikimori platform.

## User features:

- Ease of Use: A simple and intuitive interface for quickly adding anime to your list.
- Modern Interface: An aesthetically pleasing and modern design that makes using the site enjoyable.
- Extensive Database: Access to a vast database of anime with information on genres, reviews, and ratings.
- Full Integration with Shikimori: All data is stored on Shikimori's servers.
- Privacy and zen: no analytics, advertising or other distractions

## Developer features:

- Clean development - React, scss modules, vite
- Clear file structure
- WIP (Work in Progress)

## Project lifecycle

- [x] Planning - design, functionality
- [ ] Development
  - [x] Alpha - Working application implementing 80% of the functionality ( + closed testing )
  - [ ] Beta - 100% of the functionality, preparing for release, collecting feedback, improving UX ( + open testing )
  - [ ] Optimization - This is a big stage of project development, as big as the problem with the performance of web applications. The most difficult stage on which I will spend much more time than others ( + refactoring)
  - [ ] Release - Stable version, everything planned has been implemented and works fine, I hope...
  - [ ] Documentation (handbook) - A big chapter in my becoming a programmer. Understand what a developer needs for comfortable implementation in an open source project
  - [ ] Further support for the project - This is a pet project, but I will do my best to make it something bigger

## Planned Todos

- [-] ~~Rewrite util getPosterImage(link) to getPosterImage(images) like (original, preview, x48, x96) and select image depending on various factors (mobile phone, mobile Internet 3g, lite mode from settings)~~ ( **at the moment this is not possible due to browser limitations** )
- [ ] Optimize svg (**its break svg, hmm**)
- [ ] Add a hack to show the user's anime status in the similar list (I use a REST API for similar animes, and it does not provide the userRate status), so I could save my anime list in the state and check it while rendering the similar list
- [ ] Add optimistic data set
- [ ] Add nextEpisodeDate in AnimeCard
- [ ] While modal is open dont select items outside it using tab
- [ ] Migrate from Fragments To Pages in Discovery

## Current progress

[Progress](CHANGELOG.md) <br/>
![Progress](CHANGELOG.md)

## Special thanks

- Shikimori - for their significant contribution to the popularization of anime in Russia, the wonderful graphql api and the terrible rest api :)

## Roadmap

- [x] Create design
- [ ] Desktop version
- [ ] Mobile version
- [ ] Create branding (name, logo)
- [ ] Inspire desing from [link](https://dribbble.com/shots/17759243-Youtube-Redesign/attachments/12925204?mode=media)
- [ ] Home design [link](<https://www.behance.net/gallery/207429923/AI-Ads-creator-(-Dashboard-Design-)>)
- [ ] Header card design [link](https://www.behance.net/gallery/194233133/WATCH-TITLE-ANIME-WEBSITE-LOGO-DESIGN-UXUI)
- [ ] While hover on card design [link](https://www.behance.net/gallery/155394041/Kurosaw-Anime-Streaming-Web-App)
- [ ] INpire for video about my site from [link](https://www.youtube.com/watch?v=QQhf6ozPhAE)
- [ ] Inspire bottom navigation from https://dribbble.com/shots/22956431-Navbar-Navigation-Bar-Apps
      https://dribbble.com/shots/18186485-Navio-Navigation-Bar

## Some resources

https://anilib.me/ru?section=home-updates

https://shikimori.one/clubs/811/pages/264-polzovatelskie-skripty

- Выбирается ли опция списка сразу же при получения фокуса с клавиатуры?
- Можно ли использовать Enter и Space для выбора варианта?
- Нажатие на Tab переносит нас к следующему варианут списка или же к следующему элементу формы?
- Что будет, когда вы достигнете последнего варианта в списке с помощью стрелок? Фокус замрет на последнем варианте, вернется к первому или же, что хуже всего, перейдет к следующему элементу формы?
- Возможно ли перейти к последней опции списка с помощью клавиши Page Down?
- Можно ли прокручивать элементы списка, если их больше, чем в поле видимости в данный момент?
