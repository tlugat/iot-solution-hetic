import "./Loader.scss";

function Loader() {
  return (
    <div class="main">
			<div class="l">
					<div class="l__face l__face--front">
							<div class="l__control"></div>
							<div class="l__control"></div>
							<div class="l__buttons">
									<div class="l__button"></div>
									<div class="l__button"></div>
									<div class="l__button"></div>
							</div>
							<div class="l__c1">
									<div class="l__c2">
											<div class="l__clothes">
													<div class="l__clothes-i"></div>
													<div class="l__clothes-i"></div>
											</div>
									</div>
							</div>
					</div>
					<div class="l__face l__face--back"></div>
					<div class="l__face l__face--right"></div>
					<div class="l__face l__face--left"></div>
					<div class="l__face l__face--top"></div>
					<div class="l__face l__face--bottom"></div>
			</div>
			<div class="s">
					<div class="l__face s__shadow"></div>
			</div>
		</div>
  )
}

export default Loader
