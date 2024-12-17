import { Portal } from "@ui/Portal/Portal.tsx";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import {
	createContext,
	FC,
	MouseEvent,
	PropsWithChildren,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import styles from "./Select.module.scss";

interface IValue {
	value: string;
	label: string;
}

interface ISelectContext {
	width?: number;
	open?: boolean;
	activeValue?: IValue;
	onActiveChange?: (value: string) => void;
	setActiveValue?: (value: IValue) => void;
	toggleOpen: () => void;
	positionY?: "center" | "top" | "bottom";
	positionX?: "center" | "left" | "right";
	selectRef?: React.RefObject<HTMLDivElement>;
}

const SelectContext = createContext<ISelectContext>({
	width: 250,
	open: false,
	activeValue: { label: "test", value: "test" },
	onActiveChange: () => {
		// console.log("Add onActiveChange in Select");
	},
	toggleOpen: () => {
		// console.log("Add toggleOpen in Select");
	},
	positionY: "bottom",
	positionX: "center",
});

interface ISelectProps {
	defaultValue?: IValue;
	onActiveChange?: (value: string) => void;
	positionY?: "center" | "top" | "bottom";
	positionX?: "center" | "left" | "right";
}
export const Select: FC<PropsWithChildren<ISelectProps>> = ({
	children,
	defaultValue,
	onActiveChange,
	positionY,
	positionX,
}) => {
	const selectRef = useRef<HTMLDivElement>(null);
	const [context, setContext] = useState<ISelectContext>({
		width: 180,
		open: false,
		toggleOpen: () => setContext((prev) => ({ ...prev, open: !prev.open })),
		activeValue: defaultValue,
		setActiveValue: (newValue: IValue) =>
			setContext((prev) => ({ ...prev, activeValue: newValue })),
		onActiveChange: onActiveChange,
		selectRef: selectRef,
		positionY,
		positionX,
	});

	return (
		<>
			<div
				className={styles.select}
				data-opened={context.open}
				ref={selectRef}
				onClick={() => context.toggleOpen && context?.toggleOpen()}
			>
				{context.activeValue?.label}
				<ChevronDown size={18} style={{ transform: context.open ? "rotate(-180deg)" : "" }} />
			</div>
			<SelectContext.Provider value={context}>{children}</SelectContext.Provider>
		</>
	);
};

interface IContextContentProps
	extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const SelectContent: FC<IContextContentProps> = ({ children }) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const { open, selectRef, width, positionY, positionX } = useContext(SelectContext);

	useEffect(() => {
		if (contentRef && contentRef.current && selectRef && selectRef.current) {
			// console.log("Run useEffect in Select2Content");

			contentRef.current.style.width = width + "px";
			contentRef.current.style.left =
				selectRef.current.offsetLeft +
				(selectRef.current.offsetWidth - contentRef.current.offsetWidth) / 2 +
				"px";
			contentRef.current.style.top =
				selectRef.current.offsetTop + selectRef.current.offsetHeight + 10 + "px";
			// console.log("position, ", positionY, positionX);

			if (positionY === "top") {
				contentRef.current.style.top =
					selectRef.current.offsetTop - contentRef.current.offsetHeight - 10 + "px";
			}

			if (positionX === "left") {
				// console.log("left");

				contentRef.current.style.left =
					contentRef.current.offsetLeft - selectRef.current.offsetLeft + "px";
			}

			if (positionX === "right") {
				// console.log("right");

				contentRef.current.style.left = selectRef.current.offsetLeft + "px";
			}
		}
	}, [open, contentRef, selectRef]);

	const onContentClick = (event: MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
	};

	return (
		<>
			<Portal show={open || false}>
				<div className={styles.select_content} ref={contentRef} onClick={onContentClick}>
					{children}
				</div>
			</Portal>
		</>
	);
};

interface IContextItemProps
	extends React.DetailedHTMLProps<
		React.OptionHTMLAttributes<HTMLOptionElement>,
		HTMLOptionElement
	> {
	value: string;
}

export const SelectItem: FC<IContextItemProps> = ({ children, value }) => {
	const itemRef = useRef<HTMLOptionElement>(null);
	const { activeValue, onActiveChange, toggleOpen, setActiveValue } = useContext(SelectContext);
	// const [isActive, setIsActive] = useState<boolean>(value === activeValue?.value); // and it?
	const [isActive] = useState<boolean>(value === activeValue?.value); // and it?

	const onItemClick = () => {
		setActiveValue?.({ label: children as string, value });
		onActiveChange?.(value);
		toggleOpen();
	};

	useEffect(() => {
		if (isActive) {
			if (itemRef.current) {
				itemRef.current.scrollIntoView({
					behavior: "auto",
					block: "center",
				});
			}
		}
	}, []);

	return (
		<option
			ref={itemRef}
			value={value}
			id={`select-item-${value}`}
			onClick={onItemClick}
			className={clsx(styles.select_item, {
				[styles.select_item_active]: isActive,
			})}
		>
			{children}
		</option>
	);
};
