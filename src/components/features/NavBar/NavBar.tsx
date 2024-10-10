import { BaseComponent } from "@ui/BaseComponent/BaseComponent";
import { Box } from "@ui/Box/Box";
import { RLink } from "@ui/RLink/RLink";
import type { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface IPage {
	name: string;
	path: string;
	icon?: ReactNode;
}
interface INavBarProps {
	pages: IPage[];
}

export const NavBar: FC<INavBarProps> = ({ pages }) => {
	const currentLink = useLocation().pathname;
	const isCurrentPage = (page: IPage) => page.path === currentLink;

	return (
		<BaseComponent flexDirection="column" gap="1">
			{pages.map((page) => {
				if (isCurrentPage(page)) {
					return (
						<Box border="active" clickable>
							<RLink to={page.path}>{page.icon}</RLink>
						</Box>
					);
				}
				return (
					<Box key={page.name} border="transparent">
						<RLink to={page.path}>{page.icon}</RLink>
					</Box>
				);
			})}
		</BaseComponent>
	);
};
