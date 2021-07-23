import "./Loader.scss";

function Loader() {
  return (
    <div className="main">
			<div className="l">
					<div className="l__face l__face--front">
							<div className="l__control"></div>
							<div className="l__control"></div>
							<div className="l__buttons">
									<div className="l__button"></div>
									<div className="l__button"></div>
									<div className="l__button"></div>
							</div>
							<div className="l__c1">
									<div className="l__c2">
											<div className="l__clothes">
													<div className="l__clothes-i"></div>
													<div className="l__clothes-i"></div>
											</div>
									</div>
							</div>
					</div>
					<div className="l__face l__face--back"></div>
					<div className="l__face l__face--right"></div>
					<div className="l__face l__face--left"></div>
					<div className="l__face l__face--top"></div>
					<div className="l__face l__face--bottom"></div>
			</div>
			<div className="s">
					<div className="l__face s__shadow"></div>
			</div>
		</div>
  )
}

export default Loader
