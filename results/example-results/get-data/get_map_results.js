const get_map_data = [
  { key: "abandon", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "action", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "agree", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "always", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "anxiety", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "arrive", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "audit", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "bag", gas_burnt: 6.6146, tokens_burnt: 0.0006614637442468 },
  { key: "beef", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "bird", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "boil", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "breeze", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "bulk", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "calm", gas_burnt: 6.6493, tokens_burnt: 0.0006649320529815 },
  { key: "cart", gas_burnt: 6.6493, tokens_burnt: 0.0006649320529815 },
  { key: "cereal", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "chimney", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "clever", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "code", gas_burnt: 6.6815, tokens_burnt: 0.0006681524441667 },
  { key: "convince", gas_burnt: 6.6914, tokens_burnt: 0.0006691441143647 },
  { key: "craft", gas_burnt: 6.6518, tokens_burnt: 0.000665179970531 },
  { key: "cruel", gas_burnt: 6.6518, tokens_burnt: 0.000665179970531 },
  { key: "damage", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "define", gas_burnt: 6.6543, tokens_burnt: 0.0006654278880805 },
  { key: "despair", gas_burnt: 6.6568, tokens_burnt: 0.00066567580563 },
  { key: "direct", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "donate", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "drum", gas_burnt: 6.5849, tokens_burnt: 0.0006584912706111 },
  { key: "ecology", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "embrace", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "enrich", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "eternal", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "exotic", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "family", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "fence", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "fiscal", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "foam", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "frame", gas_burnt: 6.5874, tokens_burnt: 0.0006587391881605999 },
  { key: "gallery", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "ghost", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "goat", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "grief", gas_burnt: 6.5874, tokens_burnt: 0.0006587391881605999 },
  { key: "harbor", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "high", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "host", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "identify", gas_burnt: 6.627, tokens_burnt: 0.0006627033319943 },
  { key: "indoor", gas_burnt: 6.6543, tokens_burnt: 0.0006654278880805 },
  { key: "intact", gas_burnt: 6.6543, tokens_burnt: 0.0006654278880805 },
  { key: "job", gas_burnt: 6.5502, tokens_burnt: 0.0006550229618764 },
  { key: "kind", gas_burnt: 6.5527, tokens_burnt: 0.0006552708794259 },
  { key: "laptop", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "legend", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "link", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "loyal", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "mandate", gas_burnt: 6.6568, tokens_burnt: 0.00066567580563 },
  { key: "maze", gas_burnt: 6.6493, tokens_burnt: 0.0006649320529815 },
  { key: "metal", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "model", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "much", gas_burnt: 6.5849, tokens_burnt: 0.0006584912706111 },
  { key: "near", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "noodle", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "obtain", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "only", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "outside", gas_burnt: 6.5924, tokens_burnt: 0.0006592350232596 },
  { key: "parade", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "penalty", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "pink", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "pole", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "present", gas_burnt: 6.689, tokens_burnt: 0.0006688961968152 },
  { key: "prosper", gas_burnt: 6.689, tokens_burnt: 0.0006688961968152 },
  { key: "pyramid", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "ranch", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "reduce", gas_burnt: 6.6543, tokens_burnt: 0.0006654278880805 },
  { key: "repair", gas_burnt: 6.6543, tokens_burnt: 0.0006654278880805 },
  { key: "ribbon", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "romance", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "safe", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "scene", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "seek", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "sheriff", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "siege", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "skin", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "snack", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "sort", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "spirit", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "stand", gas_burnt: 6.6518, tokens_burnt: 0.000665179970531 },
  { key: "strike", gas_burnt: 6.6543, tokens_burnt: 0.0006654278880805 },
  { key: "sunset", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "swing", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "teach", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "three", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "toe", gas_burnt: 6.6468, tokens_burnt: 0.0006646841354320001 },
  { key: "toward", gas_burnt: 6.6543, tokens_burnt: 0.0006654278880805 },
  { key: "trigger", gas_burnt: 6.6246, tokens_burnt: 0.0006624554144448 },
  { key: "twelve", gas_burnt: 6.6221, tokens_burnt: 0.0006622074968953 },
  { key: "unique", gas_burnt: 6.5899, tokens_burnt: 0.0006589871057101001 },
  { key: "useless", gas_burnt: 6.5924, tokens_burnt: 0.0006592350232596 },
  { key: "verb", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "vital", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "wasp", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "wheel", gas_burnt: 6.6196, tokens_burnt: 0.0006619595793458 },
  { key: "wish", gas_burnt: 6.6171, tokens_burnt: 0.0006617116617963 },
  { key: "yellow", gas_burnt: 6.5577, tokens_burnt: 0.0006557667145249 },
];
