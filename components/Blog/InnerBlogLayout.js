import React, { useState, useContext } from "react";
import Image from "next/image";
import AppContext from "context/AppContext";
import { mediaBreakpoint } from "utils/breakpoints";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Populer from "./Populer";
import Rekomendasi from "./Rekomendasi";
import AllTopics from "./AllTopics";
import SearchBarBlog from "components/Search/SearchBarBlog";
import SearchBarBlogSubscription from "components/Search/SearchBarBlogSubscription";
import { whitespace } from "utils/whitespace";

const StyledContainer = styled(Container)`
	width: 100%;
	justify-content: center;
	padding-top: 140px;
	padding-bottom: 56px;
	overflow: hidden;
	display: flex;
	max-width: 1180px;
	@media ${mediaBreakpoint.down.lg} {
		flex-direction: column;
	}
`;

const Main = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;

	@media ${mediaBreakpoint.down.lg} {
		width: 100%;
	}
`;

const Sidebar = styled.div`
	width: 30%;

	@media ${mediaBreakpoint.down.lg} {
		width: 100%;
	}
`;

const InnerBlogLayout = ({
	sideMenu = { allTopics: [], popularBlogPosts: [], recommendedBlogPosts: [] },
	children,
}) => {
	const { siteData } = useContext(AppContext);

	console.log(siteData && siteData.ad_picture_blog);

	const [keyword, setKeyword] = useState("");
	const { allTopics, popularBlogPosts, recommendedBlogPosts } = sideMenu;

	return (
		<StyledContainer>
			<Main className="pr-lg-5 mb-lg-0 mb-5">{children}</Main>
			<Sidebar>
				<SearchBarBlog
					onChange={(e) => setKeyword(e.target.value)}
					placeholder="Cari artikel (judul, kategori, topik)..."
				/>

				<div className="my-4" />

				<SearchBarBlogSubscription placeholder="Ketik email Anda..." />

				<div className="my-4" />

				{recommendedBlogPosts.length > 0 && (
					<>
						<Rekomendasi recommendedBlogPosts={recommendedBlogPosts} />
						<div className="my-4" />
					</>
				)}
				<AllTopics allTopics={allTopics} />
				<hr />
				<div className="mt-5 mb-4" />
				<Populer popularBlogPosts={popularBlogPosts} />

				<div style={{ height: "80px", width: "100%", display: "block" }} />
				{siteData && siteData.ad_picture_blog ? (
					<a
						href={
							siteData.ad_blog_url && !whitespace(siteData.ad_blog_url)
								? siteData.ad_blog_url
								: "#"
						}
						target={
							siteData.ad_blog_url &&
							!whitespace(siteData.ad_blog_url) &&
							"_blank"
						}
						rel="noreferrer"
					>
						<div
							className="position-relative"
							style={{
								width: siteData.ad_picture_blog.width,
								height: siteData.ad_picture_blog.height,
								maxWidth: "100%",
							}}
						>
							<Image
								src={siteData.ad_picture_blog.url}
								alt="Ads"
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</a>
				) : (
					<>asd</>
				)}
			</Sidebar>
		</StyledContainer>
	);
};

export default InnerBlogLayout;
