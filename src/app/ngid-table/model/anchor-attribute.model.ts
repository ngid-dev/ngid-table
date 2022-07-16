import { AnchorRelType } from '../type/anchor-rel.type';
import { AnchorTargetType } from '../type/anchor-target.type';
import { ReferrerPolicyType } from '../type/referrer-policy.type';

export interface AnchorAttributeModel {
  href?: string;
  type?: string;
  target?: AnchorTargetType;
  rel?: AnchorRelType;
  referrerpolicy?: ReferrerPolicyType;
  ping?: string;
  media?: string;
  hreflang?: string;
  download?: string;
}
