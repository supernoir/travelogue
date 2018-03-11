import React from 'react';
import Header from './Header';

export default class Dashboard extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<h1>Dashboard</h1>
				<main className="page">
					<header className="header">旅行 - ツラベォグ</header>
					<nav className="nav">
						<ul>
							<li>ダッシュボード</li>
							<li>旅</li>
							<li>横顔</li>
						</ul>
					</nav>
					<section className="section">
						<article className="article">
							これは私の最初の旅行記です。 あなたが楽しんでくれることを望みます
						</article>
						<aside className="aside">
							あなたの旅にラベルを使うことを検討する
						</aside>
					</section>
					<footer className="footer">ミラージュ ©2018</footer>
				</main>

			</div>
		);
	}
}
