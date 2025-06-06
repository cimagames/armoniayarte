const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.Orbit,
		C3.Behaviors.Sin,
		C3.Plugins.Button,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.Browser,
		C3.Plugins.Touch,
		C3.Behaviors.Pin,
		C3.Plugins.Particles,
		C3.Behaviors.Fade,
		C3.Plugins.LocalStorage,
		C3.Plugins.Audio,
		C3.Behaviors.scrollto,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.TiledBg.Acts.SetX,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.System.Acts.ResetPersisted,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.ZMoveToObject,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.MoveToTop,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.RotateClockwise,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.TiledBg.Cnds.CompareX,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.TiledBg.Exps.X,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Text.Acts.MoveToTop,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Sprite.Acts.SetFlipped,
		C3.Plugins.System.Cnds.OnLoadFinished,
		C3.Plugins.Audio.Acts.Preload,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.System.Acts.CreateObjectByName,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.System.Acts.StopLoop,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Audio.Acts.SetSilent
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{Orbitar: 0},
	{Seno: 0},
	{Bird: 0},
	{ButtonPlay: 0},
	{TiledBackground: 0},
	{TiledBackground2: 0},
	{Background: 0},
	{Scored: 0},
	{BottomPipe: 0},
	{TopPipe: 0},
	{ScoreText: 0},
	{Sprite: 0},
	{Browser: 0},
	{Touch: 0},
	{Pegado: 0},
	{Sprite2: 0},
	{casa: 0},
	{sonido: 0},
	{Sprite4: 0},
	{plumas: 0},
	{Desvanecer: 0},
	{Desvanecer2: 0},
	{particirculo: 0},
	{humo: 0},
	{logo: 0},
	{AlmacenamientoLocal: 0},
	{Bird2: 0},
	{Bird3: 0},
	{Bird4: 0},
	{Audio: 0},
	{play: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{logotipi: 0},
	{Sprite8: 0},
	{continue: 0},
	{DesplazarHasta: 0},
	{tiembla: 0},
	{credito: 0},
	{volver: 0},
	{fundido: 0},
	{Familia1: 0},
	{Familia2: 0},
	{SecondsPerObstacle: 0},
	{JumpStrength: 0},
	{SCROLLSPEED: 0},
	{Score: 0},
	{musica: 0}
];

self.InstanceType = {
	Bird: class extends self.ISpriteInstance {},
	ButtonPlay: class extends self.IButtonInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Background: class extends self.ISpriteInstance {},
	BottomPipe: class extends self.ISpriteInstance {},
	TopPipe: class extends self.ISpriteInstance {},
	ScoreText: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	casa: class extends self.ISpriteInstance {},
	sonido: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	plumas: class extends self.IParticlesInstance {},
	particirculo: class extends self.ISpriteInstance {},
	humo: class extends self.IParticlesInstance {},
	logo: class extends self.ISpriteInstance {},
	AlmacenamientoLocal: class extends self.IInstance {},
	Bird2: class extends self.ISpriteInstance {},
	Bird3: class extends self.ISpriteInstance {},
	Bird4: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	play: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	logotipi: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	continue: class extends self.ISpriteInstance {},
	tiembla: class extends self.ISpriteInstance {},
	credito: class extends self.ISpriteInstance {},
	volver: class extends self.ISpriteInstance {},
	fundido: class extends self.ISpriteInstance {},
	Familia1: class extends self.ISpriteInstance {},
	Familia2: class extends self.ISpriteInstance {}
}