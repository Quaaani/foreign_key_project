const router = require('express').Router();
const { User } = require('../db/models');
const bcrypt = require('bcrypt');

router.route('/')
  .post(async (req, res) => {
    try {

      console.log('/registration req.body =>', req.body);
      const { user_email, user_password } = req.body;
    
      const user = await User.findOne({ where: { user_email } });
      if (user)
        return res.status(400).json({ message: 'Такая почта уже используется' });
    
      // Валидация почты
      const regexpEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailCheck = regexpEmail.test(user_email);
    
      // Валдиация пароля
      const regexpPassword =
        /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
      const passwordCheck = regexpPassword.test(user_password);
    
      if (!emailCheck) return res.status(400).json({ message: 'Неверно указан почтовый адрес' })
      if (!passwordCheck) return res.status(400).json({ message: 'Пароль должен быть не менее 8 символо и состоять из спец. символов и цифр' })
    
      req.body.user_password = await bcrypt.hash(user_password, 10);
      const data = await User.create(req.body)
    
      req.session.user_data = data
    
      return res.sendStatus(200)
    } catch (error) {
      console.log('Reg Error =>', error.message)
    }
});

module.exports = router;
