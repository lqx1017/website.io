<script type="text/javascript">
			var
				fileInput = document.getElementById('test-image-file'),
				info = document.getElementById('test-file-info'),
				preview = document.getElementById('test-image-preview');
			// ����change�¼�:
			fileInput.addEventListener('change', function() {
						// �������ͼƬ:
						preview.style.backgroundImage = '';
						// ����ļ��Ƿ�ѡ��:
						if (!fileInput.value) {
							info.innerHTML = 'û��ѡ���ļ�';
							return;
						}
						// ��ȡFile����:
						var file = fileInput.files[0];
						//�ж��ļ���С
						var size = file.size;
						if (size >= 1 * 1024 * 1024) {
							alert('�ļ���С��������');
							return false;
						}
						// ��ȡFile��Ϣ:
						info.innerHTML = '�ļ�����: ' + file.name + '<br>' +
							'�ļ���С: ' + file.size + '<br>' +
							'�ϴ�ʱ��: ' + file.lastModifiedDate;
						if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
								alert('������Ч��ͼƬ�ļ�!');
								return;
							}
							// ��ȡ�ļ�:
							var reader = new FileReader();
							reader.onload = function(e) {
								var
									data = e.target.result;         
								preview.style.backgroundImage = 'url(' + data + ')';
							};
							// ��DataURL����ʽ��ȡ�ļ�:
							reader.readAsDataURL(file);
							
						});
		</script>