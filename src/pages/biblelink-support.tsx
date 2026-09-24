import { mount } from './mount';
import { BibleLinkDocPage } from '../components/BibleLinkDocPage';
import { bibleLinkSupport } from '../content/current';

mount(<BibleLinkDocPage doc={bibleLinkSupport} kind="support" />);
