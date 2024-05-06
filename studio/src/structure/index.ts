import { StructureBuilder } from 'sanity/structure';
import { CogIcon, HeartIcon, HomeIcon, RobotIcon } from '@sanity/icons';
import { StarIcon, TiersIcon, WrenchIcon } from '@sanity/icons';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Portfolio')
    .items([
      S.listItem()
        .title('About')
        .icon(RobotIcon)
        .child(S.document().schemaType('about').documentId('about')),
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('settings')),
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(S.document().schemaType('home').documentId('home')),
      S.listItem()
        .title('Section')
        .icon(TiersIcon)
        .child(S.documentTypeList('section').title('section')),
      S.listItem()
        .title('Project')
        .icon(StarIcon)
        .child(S.documentTypeList('project').title('project')),
      S.listItem()
        .title('Open Source')
        .icon(HeartIcon)
        .child(S.documentTypeList('openSource').title('openSource')),
      S.listItem()
        .title('Work History')
        .icon(WrenchIcon)
        .child(S.documentTypeList('work').title('work')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['about', 'home', 'openSource', 'project', 'section', 'settings', 'work'].includes(
            listItem.getId() ?? '',
          ),
      ),
    ]);
