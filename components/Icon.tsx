import React from "react";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 4,
  color = "var(--brown-100)",
}) => (
  <span
    style={{
      WebkitMaskImage: `url(/icons/${name}.svg)`,
      WebkitMaskSize: "contain",
      width: 16 * (1 + size / 8),
      height: 16 * (1 + size / 8),
      display: "inline-block",
      backgroundColor: color,
    }}
  />
);

export default Icon;
