// import { css } from "@emotion/css";
// import { Flex } from "@kuma-ui/core";
// import clsx from "clsx";
// import type { FC, ReactNode } from "react";
// import { Link, useLocation } from "@tanstack/react-router";

// interface IRLinkProps {
// 	children: ReactNode;
// 	to: string;
// }

// export const RLink: FC<IRLinkProps> = ({ children, to }) => {
// 	const isCurrentPage = useLocation().pathname === to;

// 	const _style = css`
//     color: inherit;
//     text-decoration: none;

//     :hover {
//       color: var(--text-secondary);
//     }

//     ${isCurrentPage && "color: var(--accent);"}
//   `;

// 	const _class = clsx(_style);

// 	return (
// 		<Flex
// 			as={Link}
// 			to={to}
// 			bgColor="var(--color-secondary)"
// 			padding={"var(--padding)"}
// 			borderRadius={"var(--radius)"}
// 			justifyContent={"center"}
// 			alignItems={"center"}
// 		>
// 			{children}
// 		</Flex>
// 	);
// };
