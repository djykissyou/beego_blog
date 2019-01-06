package controllers

type ErrorController struct {
	baseController
}
func (c *ErrorController) Error404() {
	c.Data["content"] = "page not found"
	c.TplName = c.controllerName + "/404.html"
}
