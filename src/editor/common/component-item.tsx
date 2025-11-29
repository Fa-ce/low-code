import { useDrag } from "react-dnd";
import { ItemTypes } from "../item-type";

interface ComponentItemProps {
	// 组件名称
	name: string;
	// 组件类型
	type: string;
	// 组件描述
	description: string;
	// 拖拽接受的回调
	onDropEnd: any;
}

const ComponentItem: React.FC<ComponentItemProps> = ({
	name,
	description,
	onDropEnd,
}) => {
	const [{ isDragging }, drag] = useDrag({
		type: name,
		end: (_, monitor) => {
			const dropResult = monitor.getDropResult();
			console.log("🚀 ~ ComponentItem ~ dropResult:", dropResult);
			if (!dropResult) return;
			onDropEnd &&
				onDropEnd({
					name,
					props: name === ItemTypes.Button ? { children: "按钮" } : {},
				});
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	});

	const opacity = isDragging ? 0.5 : 1;

	return (
		<div
			ref={drag as unknown as React.RefObject<HTMLDivElement>}
			style={{ opacity: isDragging ? 0.5 : 1 }}
			className="border-dashed border-[1px] border-[gray] bg-white cursor-move py-[5px] px-[10px] rounded-lg"
		>
			{description}
		</div>
	);
};

export default ComponentItem;
