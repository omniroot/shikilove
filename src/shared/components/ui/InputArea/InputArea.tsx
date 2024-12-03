import { ArrowRight } from "lucide-react";
import { ChangeEvent, FC, FormEvent, MouseEvent, ReactNode, useRef } from "react";
import styles from "./InputArea.module.scss";
interface IInputAreaProps {
	children?: ReactNode;
	value?: string;
	maxLenght?: number;
	placeholder?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	onSubmit?: (value: string) => void;
	autoFocus?: boolean;

	textSlots?: {
		right?: ReactNode;
	};

	bottomSlots?: {
		left?: ReactNode;
	};
}
export const InputArea: FC<IInputAreaProps> = ({
	textSlots = { right: null },
	bottomSlots = {
		left: null,
	},
	onChange = () => {},
	onSubmit = () => {},
	value = 123,
	defaultValue,
	placeholder = "Placeholder",
	maxLenght = 1000,
	autoFocus = false,
}) => {
	const inputRef = useRef<HTMLTextAreaElement>(null);

	const _onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();
		if (!inputRef.current) return;
		onSubmit(inputRef.current.value);
	};

	const _onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		event.preventDefault();
		event.stopPropagation();
		if (!inputRef.current) return;
		onChange(inputRef.current.value);
	};

	const onFormClick = () => {
		inputRef.current?.focus();
	};

	const onSendButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
	};

	return (
		<form className={styles.input_area} onSubmit={_onSubmit} onClick={onFormClick}>
			<div className={styles.text_container}>
				<div className={styles.left}>
					<textarea
						onChange={_onChange}
						value={value}
						defaultValue={defaultValue}
						placeholder={placeholder}
						maxLength={maxLenght}
						autoFocus={autoFocus}
						ref={inputRef}
					/>
				</div>
				<div className={styles.right_floating}>{textSlots.right}</div>
			</div>
			<div className={styles.bottom_actions_container}>
				<div className={styles.left}>{bottomSlots.left}</div>
				<div className={styles.right}>
					<div className={styles.words_counter}>
						{inputRef.current?.value.length || 0}/{inputRef.current?.maxLength || maxLenght}
					</div>
					<button className={styles.send_button} onClick={onSendButtonClick}>
						<ArrowRight size={20} />
					</button>
				</div>
			</div>
		</form>
	);
};
