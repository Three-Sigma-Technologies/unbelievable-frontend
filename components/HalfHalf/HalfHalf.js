import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { mediaBreakpoint } from "utils/breakpoints";

const StyledCol = styled(Col)`
	display: flex;
	flex-direction: column;
	justify-content: center;

	&.special {
		margin-top: 96px;
	}

	@media ${mediaBreakpoint.down.lg} {
		&:nth-child(2) {
			margin-top: 48px;
		}
	}
`;
const StyledRow = styled(Row)`
	padding-top: 160px;
	${(props) => props.scrollh && `width: 100vw;`}
	${(props) => props.scrollh && `padding-left: 128px;`}
	${(props) => props.scrollh && `padding-right: 128px;`}
	@media ${mediaBreakpoint.down.lg} {
		padding-top: 48px;
	}
`;
const OuterContainer = styled.div`
	display: flex;
	padding-bottom: 160px;
	${(props) => props.scrollh && `min-width: 100vw;`}

	@media ${mediaBreakpoint.down.lg} {
		padding-bottom: 48px;
	}
`;
export default function HalfHalf({ left, right, light, bottom, scrollHoriz }) {
	const content = (
		<StyledRow scrollh={scrollHoriz}>
			<StyledCol lg={6} md={12}>
				{left}
			</StyledCol>
			<StyledCol lg={6} md={12}>
				{right}
			</StyledCol>
			{bottom && (
				<StyledCol className="special align-items-center" lg={12}>
					{bottom}
				</StyledCol>
			)}
		</StyledRow>
	);
	return (
		<OuterContainer
			scrollh={scrollHoriz}
			className={`${light ? `bg-white` : `bg-primary1`}`}
		>
			{scrollHoriz ? content : <Container>{content}</Container>}
		</OuterContainer>
	);
}
