import { mount } from './mount';
import { BibleLinkDocPage } from '../components/BibleLinkDocPage';
import { bibleLinkPrivacy } from '../content/current';

mount(<BibleLinkDocPage doc={bibleLinkPrivacy} kind="privacy" />);
