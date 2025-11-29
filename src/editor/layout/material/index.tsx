import ComponentItem from "../../common/component-item";
import { ItemTypes } from "../../item-type";

const Material: React.FC = () => {
	// const { addComponent } = useComponents();
	const onDrageEnd = (dropResult: any) => {
		console.log("🚀 ~ onDrageEnd ~ dropResult:", dropResult);
		// addComponent(dropResult);
	};

	return (
		<div className="w-[200px] flex flex-wrap p-[10px] gap-4 bg-green-300">
			<ComponentItem
				name={ItemTypes.Button}
				description="按钮"
				onDropEnd={onDrageEnd}
				type={ItemTypes.Button}
			/>
			<ComponentItem
				name={ItemTypes.Space}
				description="间隔"
				onDropEnd={onDrageEnd}
				type={ItemTypes.Space}
			/>
		</div>
	);
};

export default Material;
