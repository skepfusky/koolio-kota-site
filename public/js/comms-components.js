// Particles
const yayShapes = document.createElement("template");
yayShapes.innerHTML = `
	<style>
		@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
		:host {
			all: initial;
			display: block;
		}
		#p-container {
			height: 100vh;
		}
		#gradient {
			background: rgb(78,6,6);
			background: linear-gradient(90deg, rgba(78,6,6,0.85) 0%, rgb(173,8,8) 100%); 
			background-size: 175%;
			height: 100vh;
		}
	</style>
	<div id="p-container">
		<div id="particles">
			
		</div>
		<div id="gradient"></div>
	</div>
`;

class bgParticles extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: "closed" });
		shadowRoot.appendChild(yayShapes.content);
	}
}
window.customElements.define("bg-particles", bgParticles);

// Add comms item component which state can be modified 

// Footer component
const commsFooterTemp = document.createElement("template");
commsFooterTemp.innerHTML = `
<style>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css");
	:host {
		all: initial;
		display: block;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	footer {
		display: grid;
		place-content: center;
		padding: .25rem;
		font-size: 120%;
		background: darkred;
		margin: 0 2rem;
		transition: all 400ms ease;
		font-family: 'Lato', sans-serif;
		border-radius: 10px 10px 0 0;
    box-shadow: 0 0 12px rgba(0, 0 ,0 , .55);
	}
	#cf-wrap {
		display: flex;
	}
	#info {
		display: flex;
		align-items: center;
		font-size: 80%;
		cursor: default;
	}
	#social-row ul {
		display: flex;
		list-style: none;
		justify-content: center;
	}
	#social-row li {
		margin-left: 1.25rem;
		transition: all 400ms ease;
	}
	#social-row li:first-child {
		margin-left: 0;
	}
	@media only screen and (min-width: 1024px) {
		footer{
			margin: 0 5rem;
		}
	}
	@media only screen and (max-width: 768px) {
		footer {
			font-size: 150%;
			margin: 0;
			border-radius: 0;
      box-shadow: none;
		}
		#cf-wrap {
			flex-direction: column;
			width: 100%;
		}
		#info {
			justify-content: center;
			padding-top: 1.25rem;
		}
		#social-row ul {
			padding: 0;
		}
		#social-row li {
			margin-left: 2rem;
		}
	}
</style>
<footer>
	<div id="cf-wrap">
    <div id="info">Site created by Skepperooni :3</div>
    <div id="social-row">
      <nav>
        <ul>
			  	<li><a href=""#"><i class="fab fa-youtube"></i></a></li>
			  	<li><a href=""#"><i class="fab fa-github"></i></a></li>
			  	<li><a href=""#"><i class="fab fa-twitter"></i></a></li>
			  	<li><a href=""#"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </nav>
    </div>
	</div>
</footer>
`;

class commsFooter extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		const fontAwesome = document.querySelector('link[href*="font-awesome"]');
		const shadowRoot = this.attachShadow({ mode: "open" });

		if (fontAwesome) {
			shadowRoot.appendChild(fontAwesome.cloneNode());
		}

		shadowRoot.appendChild(commsFooterTemp.content);
	}
}
window.customElements.define("comms-footer", commsFooter);