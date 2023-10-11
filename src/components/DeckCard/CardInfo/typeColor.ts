export const typeColor = (type: string) => {
  switch (type) {
    case "Normal Monster":
      return "#FDE68A";
    case "Flip Effect Monster":
        return "#f0af65";
    case "Effect Monster":
      return "#f0af65";
    case "Ritual Monster":
      return "#9DB5CC";
    case "Spell Card":
      return "#1D9E74";
    case "Trap Card":
      return "#BC5A84";
    case "Fusion Monster":
      return "#A086B7";
    default:
      return "#FDE68A";
  }
};
