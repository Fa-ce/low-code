import { Button, Space } from "antd";
import React, { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../item-type";

interface Component {
	/**
	 * 组件唯一标识
	 */
	id: number;
	/* 组件名称 */
	name: string;
	/* 组件属性 */
	props: any;
	/* 子组件 */
	children?: Component[];
}

const components: Component[] = [
	{
		id: 1,
		name: "Button",
		props: {
			type: "primary",
			children: "按钮",
		},
	},
	{
		id: 2,
		name: "Space",
		props: {
			size: "large",
		},
		children: [
			{
				id: 3,
				name: "Button",
				props: {
					type: "primary",
					children: "按钮1",
				},
			},

			{
				id: 4,
				name: "Button",
				props: {
					type: "primary",
					children: "按钮2",
				},
			},
		],
	},
];

const ComponentsMap: { [key: string]: any } = {
	Button: Button,
	Space: Space,
};

const Stage: React.FC = () => {
	// 用于存储组件
	// const [components] = useComponents();

	function renderComponent(components: Component[]): React.ReactNode {
		return components.map((component) => {
			if (!ComponentsMap[component.name]) {
				return null;
			}
			return React.createElement(
				ComponentsMap[component.name],
				{
					key: component.id,
					id: component.id,
					...component.props,
				},
				component.props.children || renderComponent(component.children || [])
			);
		});
	}

	// 如果拖拽的组件是可以放置的，canDrp 为 true 通过这个可以给租金啊添加边框
	const [{ canDrop }, drop] = useState({
		// 可以接受的元素类型
		accept: [ItemTypes.Button, ItemTypes.Space],
		// 是否可以放置
		drop: (_, monitor) => {
			const didDrop = monitor.didDrop();
			if (didDrop) return;
			return {
				id: 0,
			};
		},
		collect: (monitor) => ({
			canDrop: monitor.canDrop(),
		}),
	});

	return (
		<div
			ref={drop as unknown as React.RefObject<HTMLDivElement>}
			className="flex-1 h-[100vh] "
		>
			{renderComponent(components)}
		</div>
	);
};

export default Stage;
