export class TermType {
  term_id: number | undefined;
  name: string | undefined;
  slug: string | undefined;
  team_group: number | undefined;
}

export class TermMetaType {
  umeta_id: number | undefined;
  term_id: number | undefined;
  meta_key: string | undefined;
  meta_value: string | undefined;
}

export class TermTaxonomyType {
  term_taxonomy_id: number | undefined;
  term_id: number | undefined;
  taxonomy: string | undefined;
  description: string | undefined;
  parent: number | undefined;
  count: number | undefined;
}

export class TermRelationshipType {
  id: number | undefined;
  term_taxonomy_id: number | undefined;
  term_order: number | undefined;
}
