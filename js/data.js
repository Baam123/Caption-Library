const captions = [
  {
    id: 1,
    content:
      "Nếu nàng là hố đen vũ trụ thì ta nguyện buông bỏ vùng vẫy để có thể chìm vào bóng tối ấy.",
    category: "💘 Thả thính",
  },
  {
    id: 2,
    content:
      "Như một thợ săn kho báu, nàng chính là viên kim cương lung linh nhất mà ta từng thấy từ trước tới giờ.",
    category: "💘 Thả thính",
  },
  {
    id: 3,
    content:
      "Trên phương diện sắc đẹp thì không gì đủ khả năng đo được vẻ đẹp của nàng.",
    category: "💘 Thả thính",
  },
  {
    id: 4,
    content:
      "Người đẹp à, trong mắt ta nàng trông như một bảo vật chỉ có thể ngắm nhìn chứ chẳng thể lại gần.",
    category: "💘 Thả thính",
  },
  {
    id: 5,
    content:
      "Vẻ đẹp toả nắng của nàng là thứ mà thần Helios còn phải lắc đầu ngán ngẩm thì bậc thường dân như ta dùng những ngữ ngôn phàm trần làm thế nào để có thể miêu tả trọn vẹn sắc đẹp đó đây ?",
    category: "💘 Thả thính",
  },
  {
    id: 6,
    content:
      "Định khen em xinh như hoa, \n Nhưng nghĩ lại làm gì có hoa nào đẹp bằng em đâu.",
    category: "💘 Thả thính",
  },
  {
    id: 7,
    content:
      "Mẫu đơn hoa hạ tử, tố quỷ dã phong lưu.",
    category: "💘 Thả thính",
  },
  {
    id: 8,
    content:
      "Nàng hệt như cầu vòng sau mưa, \n Vì lặng lẽ nằm im trên trời nhưng luôn khiến người khác phải ngước nhìn.",
    category: "💘 Thả thính",
  },
  {
    id: 9,
    content:
      "Nếu nàng sinh ra ở thời tam quốc, thì có lẽ Lữ Bố đã không lấy Điêu Thuyền.",
    category: "💘 Thả thính",
  },
  {
    id: 10,
    content:
      "Thanh xuân là những ngày tháng ta sống hết mình, yêu hết mình, và đôi khi cũng đau hết mình.",
    category: "🌸 Thanh xuân",
  },
  {
    id: 11,
    content:
      "Dưới vẻ đẹp tuyệt mỹ của nàng, những vì sao rực rỡ nhất cũng phải lặng lẽ ngẩn ngơ, ghen tị trước vẻ đẹp của nàng.",
    category: "💘 Thả thính",
  },
  {
    id: 12,
    content:
      "Lộng lẫy trong chiếc váy đen Em như nàng thơ của giới paparazzi.",
    category: "💘 Thả thính",
  },
  {
    id: 13,
    content:
      "Nếu nàng là thần chết thì ta xin dâng cả trái tim này để được đi theo nàng.",
    category: "💘 Thả thính",
  },
  {
    id: 14,
    content:
      "Khi nhìn thấy nàng thì ta đã biết rằng thiên thần là có thật.",
    category: "💘 Thả thính",
  },
  {
    id: 15,
    content:
      "Dẫu em có là Medusa, tôi vẫn nguyện hoá đá để đắm chìm trong đôi mắt ấy.",
    category: "💘 Thả thính",
  },
  {
    id: 16,
    content:
      "Khoác lên mình đôi cánh của thiên nga đen, \n Nàng khiến Aphrodite cũng phải ghen tị.",
    category: "💘 Thả thính",
  },
  {
    id: 17,
    content:
      "Như dracula ta chết dưới ánh dương của vẻ đẹp tựa như Aphrodite.",
    category: "💘 Thả thính",
  },
  {
    id: 18,
    content:
      "Ôi trời, nàng lộng lẫy và huyền bí như chú thiên nga đen khiêu vũ dưới ánh trăng, hòa mình trong sắc đẹp mĩ miều, nhẹ nhàng lướt qua trái tim say đắm này.",
    category: "💘 Thả thính",
  },
  {
    id: 19,
    content:
      "Ai là kẻ tước đi đôi cánh của nàng khiến nàng phải hạ trần vậy?",
    category: "💘 Thả thính",
  },
  {
    id: 20,
    content:
      "Loài quỷ sẽ kinh sợ khi thấy nàng, vì nó ngỡ đã gặp phải thiên thần.",
    category: "💘 Thả thính",
  },
  {
    id: 21,
    content:
      "Không cười đã khuynh quốc khuynh thành, \n Cười lên càng làm trăm hoa e thẹn.",
    category: "💘 Thả thính",
  },
  {
    id: 22,
    content:
      "Khác biệt tầng lớp, không môn đăng hộ đối thì mindset không tương đồng!",
    category: "Tình yêu",
  },
  {
    id: 23,
    content:
      "Đừng đứng trên biển cả rồi nhớ hoa trên cánh đồng, \n Đừng nói thương ai khi người cũ vẫn còn trong lòng.",
    category: "Tình yêu",
  },
  {
    id: 24,
    content:
      "Nhất sinh, nhất thế, nhất song nhân, \n Tương tư, tương vọng, bất tương thân.",
    category: "Tình yêu",
  },
  {
    id: 25,
    content:
      "Cá không có nước, cá sẽ chết \n Nước không có cá, nước càng trong.",
    category: "Tình yêu",
  },
  {
    id: 26,
    content:
      "Cứ ngỡ câu chuyện về Romeo và Juliet là đẹp nhất nhưng bây giờ tôi mới biết, ta còn có thể tưởng tượng một chuyện tình đẹp hơn vậy đó là chuyện tình ta và Nàng",
    category: "Tình yêu",
  },
  {
    id: 27,
    content:
      "Nước trong leo lẻo, cá đớp cá \n Mây bỏ trăng đi, người bỏ người.",
    category: "Tình yêu",
  },
  {
    id: 28,
    content:
      "Làm gì có mùa thứ 5, làm gì có tháng 13, làm gì có chúng ta của sau này.",
    category: "Tình yêu",
  },
  {
    id: 29,
    content:
      "Mãi lo cho người ướt áo, ngoảnh lại thấy ta ướt lòng.",
    category: "Tình yêu",
  },
  {
    id: 30,
    content:
      "Một bông hoa đẹp vạn người muốn hái, \n Một trái tim chân thành vạn người chê.",
    category: "Tình yêu",
  },
  {
    id: 31,
    content:
      "Ta vừa viết lời đầu thu thì người đã kết ở cuối hạ.",
    category: "Tình yêu",
  },
  {
    id: 32,
    content:
      "Abandonment is the ultimate punishment. \n Bị bỏ rơi là hình phạt cuối cùng dành cho kẻ cố chấp.",
    category: "Tình yêu",
  },
  {
    id: 33,
    content:
      "Đáng tiếc cho kẻ yêu sai cách, \n Đáng thương cho kẻ yêu sai người",
    category: "Tình yêu",
  },
  {
    id: 34,
    content:
      "Mắt người màu đen còn trái tim màu đỏ. Khi đôi mắt biến thành màu đỏ, đó là khi trái tim trở thành màu đen",
    category: "Tình yêu",
  },
  {
    id: 35,
    content:
      "Sóng biển vỗ vào chứ không vỗ ra, \n Lòng nàng có người chứ không có ta",
    category: "Tình yêu",
  },
  {
    id: 36,
    content:
      "Ba ngàn con sông nhưng chỉ uống một gáo nước. \n Thiên hạ vạn người nhưng chỉ muốn nắm tay ngươi.",
    category: "Tình yêu",
  },
  {
    id: 37,
    content:
      "Nắng hoàng hôn ai nung mà đỏ\n Nước thủy triều ai hoạ mà xanh\n Suối tình yêu ai thêu mà có\n Đường tương tư ai tạo mà thành",
    category: "Tình yêu",
  },
  {
    id: 38,
    content:
      "Bỏ cuộc thì dễ, cố gắng đi đến cùng mới khó.",
    category: "Tâm trạng",
  },
  {
    id: 39,
    content:
      "Tâm trạng không phải lúc nào cũng màu hồng. \n Muốn thấy cầu vồng thì phải chấp nhận những cơn mưa.",
    category: "Tâm trạng",
  },
  {
    id: 40,
    content:
      "Ánh nắng đến muộn màn không thể nào cứu được bông hoa hướng dương sắp lụi tàn.",
    category: "Tâm trạng",
  },
  {
    id: 41,
    content:
      "Vốn dĩ không có chuyện quên đi, chỉ có do ta đã quen nên ta vượt qua nó mà thôi.",
    category: "Tâm trạng",
  },
  {
    id: 42,
    content:
      "Cuối cùng ta cũng bước vào độ tuổi mà đã từng rất ao ước được chạm vào nhưng không biết những gì xảy ra liệu có như ta mong ước không.",
    category: "Tâm trạng",
  },
  {
    id: 43,
    content:
      "Không phải người bán thịt gà, \n Nhưng tại sao em lại cho ta một ký ức.",
    category: "Tình yêu",
  },
  {
    id: 44,
    content:
      "Tiền là thứ tốt, nhưng không phải là thứ tốt nhất. Thứ tốt nhất là người ở bên cạnh mình.",
    category: "Tâm trạng",
  },
  {
    id: 45,
    content:
      "Sự tin tưởng giống như một tờ giấy đã bị vò nát, dù có vuốt phẳng lại thì vẫn còn vết hằn. Bạn cần chuẩn bị tâm lý cho một hành trình hồi phục tính bằng năm, chứ không phải bằng ngày.",
    category: "Tâm trạng",
  },
  {
    id: 46,
    content:
      "Lòng người như biển cả, muốn hiểu, nhìn mặt nước thôi chưa đủ.",
    category: "Tâm trạng",
  },
  {
    id: 47,
    content:
      "Nơi sâu nhất không phải là vực thẳm mà là lòng người",
    category: "Tâm trạng",
  },
  {
    id: 48,
    content:
      "Trên đời này làm gì có 2 chữ 'giá như' ",
    category: "Tâm trạng",
  },
  {
    id: 49,
    content:
      "Kẻ có tiền vẽ tiên, vẽ phật\n Người không tiền vẽ mỗi mộng mơ",
    category: "Tâm trạng",
  },
  {
    id: 50,
    content:
      "Khen ai khéo tạc bình phong\n Ngoài long lân phụng, trong lòng xấu xa",
    category: "Tâm trạng",
  },
  {
    id: 51,
    content:
      "Những kẻ mang trái tim không an phận rồi sẽ phải trả một cái giá rất đắt",
    category: "Tình yêu",
  },
  {
    id: 52,
    content:
      "Thứ gì chân thành, thứ đó rẻ mạt. Người nào hiểu chuyện, người đó thiệt thòi",
    category: "Tình yêu",
  },
  {
    id: 53,
    content:
      "Sẽ không ai trân trọng một bông hoa nếu nó không đẹp.",
    category: "Tâm trạng",
  },
  {
    id: 54,
    content:
      "Có những người ngỡ là duyên. Hóa ra chỉ đến dạy ta trưởng thành.",
    category: "Tình yêu",
  },
  {
    id: 55,
    content:
      "Tôi bắt đầu từ những thứ cơ bản nhất nhưng sẽ là khởi nguồn cho thứ vĩ đại nhất.",
    category: "Động lực",
  },
  {
    id: 56,
    content:
      "Tôi thắp sáng con đường bạn đi để rồi bị bạn bỏ lại.",
    category: "Tâm trạng",
  },
  {
    id: 57,
    content:
      "Đôi khi quý hiếm không đồng nghĩa với giá trị cao.",
    category: "Triết lý",
  },
  {
    id: 58,
    content:
      "Chỉ cần đủ kinh nghiệm, vết nứt nào cũng sẽ lành.",
    category: "Triết lý",
  },
  {
    id: 59,
    content:
      "Ở đây tôi có thể ở dưới đáy xã hội nhưng ở một nơi khác tôi nằm trên đỉnh cao.",
    category: "Triết lý",
  },
  {
    id: 60,
    content:
      "Ta không biết cách nói lời tạm biệt nên mỗi khi rời đi ta lại để lại một khoảng trống.",
    category: "Tâm trạng",
  },
  {
    id: 61,
    content:
      "Giá trị của bạn nằm ở cách bạn tự nhìn nhận bản thân chứ không phụ thuộc vào ánh nhìn của thế giới.",
    category: "Động lực",
  },
  {
    id: 62,
    content:
      "Đã bao nhiêu lần bạn ước rằng mình đừng lớn để mãi chỉ là đứa trẻ con?",
    category: "Tâm trạng",
  },
  {
    id: 63,
    content:
      "Kẻ mày, kẻ mắt, kẻ môi \n Kẻ tồi giả tốt, kẻ tốt cả tin\n Kẻ rơi nước mắt, kẻ không ra gì!",
    category: "Tình yêu",
  },
  {
    id: 64,
    content:
      "Gọi em là Việt Nam 1975 \n Vì nụ cười em đẹp như ngày độc lập.",
    category: "Thả thính",
  },
  {
    id: 65,
    content:
      "Tên trộm năm xưa chắc giờ đang hối hận lắm vì hắn trộm nhầm đồ giả. Nàng Mona Lisa đang ở đây cơ mà.",
    category: "Thả thính",
  },
  {
    id: 66,
    content:
      "Gọi em là Canada 1867 \n Vì em đã từng thuộc về Anh.",
    category: "Thả thính",
  },
  {
    id: 67,
    content:
      "Gọi em là Elizabeth \n Vì em là nữ hoàng của Anh.",
    category: "Thả thính",
  },
  {
    id: 68,
    content:
      "Vào một ngày chẳng nắng, ta chơi oẳn tù tì.\n Anh vội vàng ra kéo, em vẫn chọn ra đi",
    category: "Tình yêu",
  },
  {
    id: 69,
    content:
      "Trời có 4 mùa: Xuân - Hạ - Thu - Đông \n Đất có 4 phương: Đông - Tây - Nam - Bắc \n Người có 4 đức: Cần - Kiệm - Liêm - Chính \n Thiếu 1 mùa thì không thành trời \n Thiếu 1 phương thì không thành đất \n Thiếu 1 đức thì không thành người",
    category: "Triết lý",
  },
  {
    id: 70,
    content:
      "Sau này anh cưới người môn đăng hộ đối. \n Em cưới người khiến cha mẹ yên lòng",
    category: "Tình yêu",
  },
  {
    id: 71,
    content:
      "Không phải không có em anh không sống được mà là anh thích cuộc đời anh có em.",
    category: "Thả thính",
  },
  {
    id: 72,
    content:
      "Tập đi từ năm một tuổi, vậy mà hai mươi mấy tuổi bước chân vẫn chưa vững vàng.",
    category: "Tâm trạng",
  },
  {
    id: 73,
    content:
      "Kẻ xấu trong câu chuyện của em từng là người đứng sau lưng em lâu nhất vào những ngày em không ổn.",
    category: "Tình yêu, Tâm trạng",
  },
  {
    id: 74,
    content:
      "Tặng em quả táo độc, vì anh muốn độc chiếm lấy em.",
    category: "Thả thính",
  },
  {
    id: 75,
    content:
      "Tặng em một quả chanh thần, bổ ra để thấy chân thành của anh.",
    category: "Thả thính",
  },
  {
    id: 76,
    content:
      "Đi qua hoa cúc thấy trời hạ \n Nắng còn soi bước mảnh tình ta? \n Ngày em bước tiếp khoảng trời lạ \n Anh ngồi u uất ngày em xa",
    category: "Tình yêu",
  },
];
